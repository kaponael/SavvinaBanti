import { inject, provide, ref, type Ref } from 'vue'

type LangCode = 'en' | 'gr'

type LanguageContext = {
  lang: Ref<LangCode>
  setLang: (value: LangCode) => void
}

const LANGUAGE_KEY = Symbol('language')

export function provideLanguage() {
  const existing = inject<LanguageContext | null>(LANGUAGE_KEY, null)
  if (existing) return existing

  const lang = ref<LangCode>('en')
  const setLang = (value: LangCode) => {
    lang.value = value
  }

  const ctx: LanguageContext = { lang, setLang }
  provide(LANGUAGE_KEY, ctx)
  return ctx
}

export function useLanguage() {
  const ctx = inject<LanguageContext | null>(LANGUAGE_KEY, null)
  if (ctx) return ctx

  // Fallback if used outside provider
  const lang = ref<LangCode>('en')
  const setLang = (value: LangCode) => {
    lang.value = value
  }
  return { lang, setLang }
}
