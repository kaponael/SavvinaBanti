/**
 * Cloudflare Pages Function — GitHub OAuth proxy for Decap CMS.
 */
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const provider = 'github'

  if (!code) {
    const authUrl = new URL('https://github.com/login/oauth/authorize')
    authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
    authUrl.searchParams.set('scope', 'repo,user')
    authUrl.searchParams.set('redirect_uri', `${url.origin}/api/auth`)
    return Response.redirect(authUrl.toString(), 302)
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/auth`,
    }),
  })

  const tokenData = await tokenResponse.json()

  if (tokenData.error || !tokenData.access_token) {
    const msg = JSON.stringify({ error: tokenData.error_description || 'GitHub OAuth failed' })
    return postMessageResponse(`authorization:${provider}:error:${msg}`)
  }

  const msg = JSON.stringify({ token: tokenData.access_token, provider })
  return postMessageResponse(`authorization:${provider}:success:${msg}`)
}

/**
 * Returns an HTML page that postMessages the result back to the Decap CMS
 * window that opened this popup, then closes itself.
 */
function postMessageResponse(message) {
  const html = `<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <script>
      (function () {
        function sendMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin)
          window.removeEventListener('message', sendMessage)
          window.close()
        }
        window.addEventListener('message', sendMessage, false)
        window.opener.postMessage('authorizing:github', '*')
      })()
    </script>
  </body>
</html>`
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
