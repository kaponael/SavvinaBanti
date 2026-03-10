<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useLanguage } from '../composables/useLanguage.ts'

const route = useRoute()
const { lang, setLang } = useLanguage()

const isActive = (name: string) => computed(() => route.name === name)
</script>

<template>
  <header class="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div class="flex items-center gap-3">
        <div class="relative flex items-center justify-center bg-card shadow-2xl shadow-primary/15">
          <img
            src="../assets/sbanti_logo.png"
            alt="Savvina Banti logo"
            class="h-10 w-10 object-cover"
          />
        </div>
      </div>

      <div class="flex items-center justify-center gap-8">
        <nav class="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <RouterLink
            :to="{ name: 'home' }"
            :class="[
              'transition-colors',
              isActive('home').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'services' }"
            :class="[
              'transition-colors',
              isActive('services').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            Services
          </RouterLink>
          <RouterLink
            :to="{ name: 'contact' }"
            :class="[
              'transition-colors',
              isActive('contact').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            Contact
          </RouterLink>
          <RouterLink
            :to="{ name: 'blog' }"
            :class="[
              'transition-colors',
              isActive('blog').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            Blog
          </RouterLink>
        </nav>

        <div class="flex items-center gap-2 rounded-full bg-slate-100 p-1 text-xs font-medium">
          <button
            type="button"
            :class="[
              'rounded-full px-3 py-1 shadow-sm transition-colors',
              lang === 'en' ? 'bg-sky-600 text-white' : 'text-gray-600 hover:text-sky-600',
            ]"
            @click="setLang('en')"
          >
            EN
          </button>
          <button
            type="button"
            :class="[
              'rounded-full px-3 py-1 transition-colors',
              lang === 'gr' ? 'bg-sky-600 text-white' : 'text-gray-600 hover:text-sky-600',
            ]"
            @click="setLang('gr')"
          >
            GR
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
