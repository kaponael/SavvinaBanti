<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useLanguage } from '../composables/useLanguage.ts'

const route = useRoute()
const { lang, setLang } = useLanguage()
const mobileMenuOpen = ref(false)

const isActive = (name: string) => computed(() => route.name === name)
const content = {
  en: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    toggleMenu: 'Toggle navigation menu',
  },
  gr: {
    home: 'Αρχική',
    services: 'Υπηρεσίες',
    contact: 'Επικοινωνία',
    blog: 'Ιστολόγιο',
    toggleMenu: 'Εναλλαγή μενού πλοήγησης',
  },
} as const
const t = computed(() => content[lang.value])

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-30 border-b bg-white/80">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div class="flex items-center gap-3">
        <div class="relative flex items-center justify-center bg-card shadow-2xl shadow-primary/15">
          <RouterLink
            :to="{ name: 'home' }"
            :class="[
              'transition-colors',
              isActive('home').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            <img
              src="../assets/sbanti_logo.png"
              alt="Savvina Banti logo"
              class="h-11 w-11 object-cover"
            />
          </RouterLink>
        </div>
      </div>

      <div class="flex items-center justify-center gap-3 md:gap-8">
        <nav class="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <RouterLink
            :to="{ name: 'home' }"
            :class="[
              'transition-colors',
              isActive('home').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            {{ t.home }}
          </RouterLink>
          <RouterLink
            :to="{ name: 'services' }"
            :class="[
              'transition-colors',
              isActive('services').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            {{ t.services }}
          </RouterLink>
          <RouterLink
            :to="{ name: 'contactme' }"
            :class="[
              'transition-colors',
              isActive('contactme').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            {{ t.contact }}
          </RouterLink>
          <RouterLink
            :to="{ name: 'blog' }"
            :class="[
              'transition-colors',
              isActive('blog').value ? 'text-sky-600' : 'hover:text-sky-600',
            ]"
          >
            {{ t.blog }}
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

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-foreground transition-colors hover:bg-primary/5 md:hidden"
          :aria-expanded="mobileMenuOpen"
          :aria-label="t.toggleMenu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="absolute left-0 right-0 top-full z-40 border-t bg-white/95 px-6 pb-4 pt-3 shadow-xl backdrop-blur md:hidden"
    >
      <nav class="flex flex-col gap-3 text-sm font-medium text-gray-700">
        <RouterLink
          :to="{ name: 'home' }"
          :class="[
            'rounded-lg px-3 py-2 transition-colors',
            isActive('home').value
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-primary/5 hover:text-sky-600',
          ]"
        >
          {{ t.home }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'services' }"
          :class="[
            'rounded-lg px-3 py-2 transition-colors',
            isActive('services').value
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-primary/5 hover:text-sky-600',
          ]"
        >
          {{ t.services }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'contactme' }"
          :class="[
            'rounded-lg px-3 py-2 transition-colors',
            isActive('contactme').value
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-primary/5 hover:text-sky-600',
          ]"
        >
          {{ t.contact }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'blog' }"
          :class="[
            'rounded-lg px-3 py-2 transition-colors',
            isActive('blog').value
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-primary/5 hover:text-sky-600',
          ]"
        >
          {{ t.blog }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
