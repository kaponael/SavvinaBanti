export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  body: string
}

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter = '', body = ''] = match

  const data: Record<string, string | string[]> = {}
  const lines = frontmatter.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i] ?? ''
    const colonIdx = line.indexOf(':')
    if (colonIdx <= 0) {
      i++
      continue
    }

    const key = line.slice(0, colonIdx).trim()
    const rawValue = line.slice(colonIdx + 1).trim()

    // List value (empty after colon, followed by '  - item' lines)
    if (rawValue === '') {
      const listItems: string[] = []
      i++
      while (i < lines.length) {
        const listLine = lines[i]
        if (!listLine || !listLine.trimStart().startsWith('- ')) break
        listItems.push(listLine.trim().slice(2).trim())
        i++
      }
      data[key] = listItems
      continue
    }

    data[key] = rawValue.replace(/^['"]|['"]$/g, '')
    i++
  }

  return { data, content: body }
}

const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' }) as Record<
  string,
  () => Promise<string>
>

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []

  for (const [path, loader] of Object.entries(modules)) {
    const raw = await loader()
    const { data, content } = parseFrontmatter(raw)

    const slug = path.split('/').pop()?.replace('.md', '') ?? ''

    posts.push({
      slug,
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      description: (data.description as string) ?? '',
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      body: content,
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts()
  return posts.find((p) => p.slug === slug) ?? null
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
