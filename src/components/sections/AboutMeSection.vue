<template>
  <section id="about" class="relative overflow-hidden bg-background py-28 md:py-36">
    <div class="absolute left-0 right-0 top-0 h-1 bg-primary/20"></div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="mb-16 text-center">
        <span
          class="mb-4 inline-block rounded-full border-2 border-primary/20 bg-primary/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary"
        >
          {{ t.tag }}
        </span>

        <h2
          class="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          {{ t.title }}
        </h2>
      </div>

      <div class="mx-auto max-w-4xl space-y-6 text-center">
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description }}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description2 }}
        </p>
      </div>

      <div class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(stat, i) in t.stats"
          :key="i"
          class="group rounded-2xl border-2 border-border bg-card p-8 text-center shadow-lg shadow-foreground/5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
        >
          <div
            class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <component :is="stat.icon" class="h-7 w-7" />
          </div>

          <p class="text-lg font-bold text-foreground">
            {{ stat.value }}
          </p>
          <p class="mt-2 text-sm font-medium text-muted-foreground">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { GraduationCap, Heart, Users, Award } from 'lucide-vue-next'

const { lang } = useLanguage()

const content = {
  en: {
    tag: 'About Me',
    title: 'Dedicated to Supporting Young Minds',
    description:
      "With years of professional experience, I specialise in providing comprehensive psychological assessments, counselling, and evidence-based interventions for children and adolescents. My approach is warm, empathetic, and tailored to each individual's unique needs.",
    description2:
      'I work closely with families, schools, and other professionals to ensure holistic support for every child. Whether addressing learning difficulties, emotional challenges, or behavioural concerns, my goal is to empower children to reach their full potential.',
    stats: [
      { icon: GraduationCap, label: 'Specialised Training', value: 'MSc Educational Psychology' },
      { icon: Heart, label: 'Approach', value: 'Child-Centred Care' },
      { icon: Users, label: 'Collaboration', value: 'Families & Schools' },
      { icon: Award, label: 'Registration', value: 'No. 1070' },
    ],
  },
  gr: {
    tag: 'Σχετικά με Εμένα',
    title: 'Αφιερωμένη στην Υποστήριξη των Νεαρών Μυαλών',
    description:
      'Με χρόνια επαγγελματικής εμπειρίας, εξειδικεύομαι στην παροχή ολοκληρωμένων ψυχολογικών αξιολογήσεων, συμβουλευτικής και τεκμηριωμένων παρεμβάσεων για παιδιά και εφήβους. Η προσέγγισή μου είναι ζεστή, εμπαθητική και προσαρμοσμένη στις μοναδικές ανάγκες κάθε ατόμου.',
    description2:
      'Συνεργάζομαι στενά με οικογένειες, σχολεία και άλλους επαγγελματίες για να εξασφαλίσω ολιστική υποστήριξη για κάθε παιδί. Είτε πρόκειται για μαθησιακές δυσκολίες, συναισθηματικές προκλήσεις ή συμπεριφορικά ζητήματα, στόχος μου είναι να ενδυναμώσω τα παιδιά να φτάσουν στο μέγιστο των δυνατοτήτων τους.',
    stats: [
      {
        icon: GraduationCap,
        label: 'Εξειδικευμένη Εκπαίδευση',
        value: 'MSc Εκπαιδευτική Ψυχολογία',
      },
      { icon: Heart, label: 'Προσέγγιση', value: 'Παιδοκεντρική Φροντίδα' },
      { icon: Users, label: 'Συνεργασία', value: 'Οικογένειες & Σχολεία' },
      { icon: Award, label: 'Εγγραφή', value: 'Αρ. 1070' },
    ],
  },
} as const

const t = computed(() => content[lang.value])
</script>
