<template>
  <section id="blog" class="relative overflow-hidden bg-background py-28 md:py-36">
    <div class="absolute left-0 right-0 top-0 h-1 bg-primary/20" />

    <div class="relative mx-auto max-w-7xl px-6">
      <SectionHeader :tag="t.tag" :title="t.title" :subtitle="t.subtitle" />

      <!-- Loading state -->
      <div v-if="loading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="n in 3"
          :key="n"
          class="animate-pulse rounded-2xl border-2 border-border bg-card p-10"
        >
          <div class="mb-4 h-4 w-1/3 rounded-full bg-muted" />
          <div class="mb-3 h-6 w-3/4 rounded-full bg-muted" />
          <div class="space-y-2">
            <div class="h-4 w-full rounded-full bg-muted" />
            <div class="h-4 w-5/6 rounded-full bg-muted" />
            <div class="h-4 w-4/6 rounded-full bg-muted" />
          </div>
        </div>
      </div>

      <!-- Posts grid -->
      <div v-else-if="posts.length" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-10 shadow-lg shadow-foreground/5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
        >
          <div
            class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150"
          />

          <div class="relative flex h-full flex-col">
            <!-- Date + tags -->
            <div class="mb-4 flex flex-wrap items-center gap-2">
              <span class="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <Calendar class="h-3.5 w-3.5" />
                {{ formatDate(post.date) }}
              </span>
              <span
                v-for="tag in post.tags.slice(0, 2)"
                :key="tag"
                class="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary"
              >
                {{ tag }}
              </span>
            </div>

            <h3
              class="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary"
            >
              {{ post.title }}
            </h3>

            <p class="flex-1 text-base leading-relaxed text-muted-foreground">
              {{ post.description }}
            </p>

            <div class="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
              {{ t.readMore }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Empty state -->
      <div v-else class="py-20 text-center">
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary"
        >
          <BookOpen class="h-9 w-9" />
        </div>
        <p class="text-lg font-semibold text-muted-foreground">{{ t.empty }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Calendar, ArrowRight, BookOpen } from 'lucide-vue-next'
import { useLanguage } from '../../composables/useLanguage'
import { loadBlogPosts, formatDate, type BlogPost } from '../../composables/useBlogPosts'
import SectionHeader from '../SectionHeader.vue'

const { lang } = useLanguage()

const posts = ref<BlogPost[]>([])
const loading = ref(true)

onMounted(async () => {
  posts.value = await loadBlogPosts()
  loading.value = false
})

const content = {
  en: {
    tag: 'Blog',
    title: 'Articles',
    subtitle:
      'Articles on child psychology, parenting, and mental health — written to inform and support families.',
    readMore: 'Read article',
    empty: 'No posts yet — check back soon.',
  },
  gr: {
    tag: 'Ιστολόγιο',
    title: 'Αρθρογραφία',
    subtitle:
      'Άρθρα για την παιδική ψυχολογία, τη γονεϊκότητα και την ψυχική υγεία — γραμμένα για να ενημερώνουν και να υποστηρίζουν τις οικογένειες.',
    readMore: 'Διαβάστε το άρθρο',
    empty: 'Δεν υπάρχουν αναρτήσεις ακόμα — επισκεφτείτε ξανά σύντομα.',
  },
} as const

const t = computed(() => content[lang.value])
</script>
