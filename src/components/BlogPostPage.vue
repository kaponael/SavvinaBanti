<template>
  <main class="relative min-h-screen bg-background">
    <div class="absolute left-0 right-0 top-0 h-1 bg-primary/20" />

    <!-- Loading -->
    <div v-if="loading" class="mx-auto max-w-3xl px-6 py-28">
      <div class="animate-pulse space-y-6">
        <div class="h-5 w-24 rounded-full bg-muted" />
        <div class="h-10 w-3/4 rounded-full bg-muted" />
        <div class="h-4 w-1/4 rounded-full bg-muted" />
        <div class="space-y-3 pt-8">
          <div v-for="n in 6" :key="n" class="h-4 rounded-full bg-muted" :style="`width: ${70 + (n % 3) * 10}%`" />
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else-if="!post" class="mx-auto max-w-3xl px-6 py-28 text-center">
      <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <FileX class="h-9 w-9" />
      </div>
      <h1 class="mb-4 text-2xl font-bold text-foreground">{{ t.notFound }}</h1>
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
      >
        <ArrowLeft class="h-4 w-4" />
        {{ t.back }}
      </RouterLink>
    </div>

    <!-- Post content -->
    <article v-else class="mx-auto max-w-3xl px-6 py-28">
      <!-- Back link -->
      <RouterLink
        to="/blog"
        class="mb-10 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft class="h-4 w-4" />
        {{ t.back }}
      </RouterLink>

      <!-- Header -->
      <header class="mb-12">
        <div class="mb-5 flex flex-wrap items-center gap-2">
          <span class="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            <Calendar class="h-3.5 w-3.5" />
            {{ formatDate(post.date) }}
          </span>
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary"
          >
            {{ tag }}
          </span>
        </div>

        <h1 class="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {{ post.title }}
        </h1>
        <p class="mt-5 text-xl leading-relaxed text-muted-foreground">
          {{ post.description }}
        </p>
      </header>

      <!-- Divider -->
      <div class="mb-12 h-px bg-border" />

      <!-- Body -->
      <div
        class="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-ul:text-muted-foreground prose-ol:text-muted-foreground
          prose-li:leading-relaxed
          prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
        v-html="renderedBody"
      />

      <!-- Footer -->
      <div class="mt-16 border-t-2 border-border pt-10">
        <RouterLink
          to="/blog"
          class="inline-flex items-center gap-2 rounded-full border-2 border-border px-8 py-3 text-base font-bold text-foreground transition-all hover:border-primary hover:bg-primary/5"
        >
          <ArrowLeft class="h-4 w-4" />
          {{ t.backAll }}
        </RouterLink>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft, Calendar, FileX } from 'lucide-vue-next'
import { marked } from 'marked'
import { useLanguage } from '../composables/useLanguage'
import { loadBlogPost, formatDate, type BlogPost } from '../composables/useBlogPosts'

const route = useRoute()
const { lang } = useLanguage()

const post = ref<BlogPost | null>(null)
const loading = ref(true)

const renderedBody = computed(() => {
  if (!post.value?.body) return ''
  return marked(post.value.body) as string
})

async function fetchPost(slug: string) {
  loading.value = true
  post.value = await loadBlogPost(slug)
  loading.value = false
}

onMounted(() => fetchPost(route.params.slug as string))
watch(() => route.params.slug, (slug) => fetchPost(slug as string))

const content = {
  en: {
    back: 'Back to Blog',
    backAll: 'All articles',
    notFound: 'Post not found.',
  },
  gr: {
    back: 'Επιστροφή στο Ιστολόγιο',
    backAll: 'Όλα τα άρθρα',
    notFound: 'Η ανάρτηση δεν βρέθηκε.',
  },
} as const

const t = computed(() => content[lang.value])
</script>
