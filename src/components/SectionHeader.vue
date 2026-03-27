<template>
  <div class="mb-16 text-center">
    <span
      class="mb-4 inline-block rounded-full border-2 border-primary/20 bg-primary/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary"
    >
      {{ tag }}
    </span>
    <h2 class="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" :class="`mx-auto mt-5 text-lg text-muted-foreground md:text-xl ${subtitleMaxWidth}`">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag: string
    title: string
    subtitle?: string
    subtitleMaxWidth?: string
  }>(),
  {
    subtitle: '',
    subtitleMaxWidth: 'max-w-3xl',
  },
)
</script>
