<template>
  <section id="blog" class="relative overflow-hidden bg-background py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Blog
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const content = {
  en: {},
  gr: {},
} as const

const t = computed(() => content[lang.value])
</script>
