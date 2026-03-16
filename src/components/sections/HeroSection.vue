<template>
  <section id="hero" class="relative overflow-hidden bg-card py-32 md:py-44">
    <!-- Bold blue background shapes -->
    <div class="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
    <div
      class="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-primary/6 blur-3xl"
    />

    <div
      class="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 md:flex-row md:gap-20"
    >
      <!-- Left: Text -->
      <div class="flex-1 text-center md:text-left">
        <span
          class="mb-6 inline-block rounded-full border-2 border-primary/20 bg-primary/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary"
        >
          {{ t.greeting }}
        </span>
        <h1
          class="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {{ t.name }}
        </h1>
        <p class="mt-5 text-xl font-semibold text-primary md:text-2xl">
          {{ t.title }}
        </p>
        <p class="mt-2 text-sm font-medium text-muted-foreground">({{ t.reg }})</p>
        <p
          class="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {{ t.subtitle }}
        </p>
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
          <a
            href="#about"
            class="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/35"
          >
            {{ t.cta }}
            <ArrowDown class="h-5 w-5" />
          </a>
          <RouterLink
            to="/contactme"
            class="inline-flex items-center gap-3 rounded-full border-2 border-border px-10 py-4 text-lg font-bold text-foreground transition-all hover:border-primary hover:bg-primary/5"
          >
            {{ t.cta2 }}
          </RouterLink>
        </div>
      </div>

      <!-- Right: Logo -->
      <div class="relative flex-shrink-0">
        <div class="relative h-72 w-72 md:h-96 md:w-96">
          <!-- Glow ring -->
          <div class="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <div
            class="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary/20 bg-card shadow-2xl shadow-primary/15"
          >
            <img
              src="../../assets/sbanti_picture.jpg"
              alt="Savvina Banti"
              class="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { ArrowDown } from 'lucide-vue-next'

const { lang } = useLanguage()

const content = {
  en: {
    greeting: 'Welcome',
    name: 'Savvina Banti',
    title: 'Registered School / Educational Psychologist',
    subtitle: 'Mental Health Services for Children, Adolescents, Parents, and Teachers.',
    cta: 'Learn More',
    cta2: 'Get in Touch',
    reg: 'Registration No. 1070',
  },
  gr: {
    greeting: 'Καλώς ήρθατε',
    name: 'Σαββίνα Μπαντή',
    title: 'Εγγεγραμμένη Σχολική / Εκπαιδευτική Ψυχολόγος',
    subtitle: 'Υπηρεσίες Ψυχικής Υγείας σε Παιδιά, Εφήβους, Γονείς και Εκπαιδευτικούς.',
    cta: 'Μάθετε Περισσότερα',
    cta2: 'Επικοινωνήστε',
    reg: 'Αρ. Μητρώου 1070',
  },
} as const

const t = computed(() => content[lang.value])
</script>
