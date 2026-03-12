<template>
  <section id="services" class="relative overflow-hidden bg-card py-28 md:py-36">
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

        <p class="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground md:text-xl">
          {{ t.subtitle }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, i) in t.services"
          :key="i"
          class="group relative overflow-hidden rounded-2xl border-2 border-border bg-background p-10 shadow-lg shadow-foreground/5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
        >
          <div
            class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150"
          ></div>

          <div class="relative">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <component :is="service.icon" class="h-7 w-7" />
            </div>

            <h3 class="mb-3 text-xl font-bold text-foreground">
              {{ service.title }}
            </h3>

            <p class="text-base leading-relaxed text-muted-foreground">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { Brain, BookOpen, MessageCircle, Users, Lightbulb, Shield } from 'lucide-vue-next'

const { lang } = useLanguage()

const content = {
  en: {
    tag: 'Services',
    title: 'How I Can Help',
    subtitle:
      'Comprehensive psychological services tailored to children, adolescents, and their families.',
    services: [
      {
        icon: Brain,
        title: 'Psychoeducational Assessments',
        description:
          'Comprehensive cognitive, academic, and social-emotional assessments to identify learning strengths and areas of need.',
      },
      {
        icon: BookOpen,
        title: 'Learning Difficulties',
        description:
          'Specialised support for dyslexia, dyscalculia, ADHD, and other specific learning difficulties with tailored intervention plans.',
      },
      {
        icon: MessageCircle,
        title: 'Counselling & Therapy',
        description:
          'Evidence-based therapeutic interventions for anxiety, depression, self-esteem issues, and emotional wellbeing.',
      },
      {
        icon: Users,
        title: 'Family Consultation',
        description:
          "Guidance and support for parents navigating their child's developmental, emotional, or behavioural challenges.",
      },
      {
        icon: Lightbulb,
        title: 'School Consultation',
        description:
          'Collaborating with educators to develop effective strategies, accommodations, and individual education plans.',
      },
      {
        icon: Shield,
        title: 'Behavioural Support',
        description:
          'Assessment and intervention for behavioural concerns, including functional analysis and positive behaviour strategies.',
      },
    ],
  },
  gr: {
    tag: 'Υπηρεσίες',
    title: 'Πώς Μπορώ να Βοηθήσω',
    subtitle:
      'Ολοκληρωμένες ψυχολογικές υπηρεσίες προσαρμοσμένες σε παιδιά, εφήβους και τις οικογένειές τους.',
    services: [
      {
        icon: Brain,
        title: 'Ψυχοεκπαιδευτικές Αξιολογήσεις',
        description:
          'Ολοκληρωμένες γνωστικές, ακαδημαϊκές και κοινωνικο-συναισθηματικές αξιολογήσεις για τον εντοπισμό δυνατών σημείων και περιοχών ανάγκης.',
      },
      {
        icon: BookOpen,
        title: 'Μαθησιακές Δυσκολίες',
        description:
          'Εξειδικευμένη υποστήριξη για δυσλεξία, δυσαριθμησία, ΔΕΠΥ και άλλες ειδικές μαθησιακές δυσκολίες.',
      },
      {
        icon: MessageCircle,
        title: 'Συμβουλευτική & Θεραπεία',
        description:
          'Τεκμηριωμένες θεραπευτικές παρεμβάσεις για άγχος, κατάθλιψη, αυτοεκτίμηση και συναισθηματική ευημερία.',
      },
      {
        icon: Users,
        title: 'Οικογενειακή Συμβουλευτική',
        description:
          'Καθοδήγηση και υποστήριξη γονέων που αντιμετωπίζουν αναπτυξιακές, συναισθηματικές ή συμπεριφορικές προκλήσεις των παιδιών τους.',
      },
      {
        icon: Lightbulb,
        title: 'Σχολική Συμβουλευτική',
        description:
          'Συνεργασία με εκπαιδευτικούς για την ανάπτυξη αποτελεσματικών στρατηγικών και εξατομικευμένων εκπαιδευτικών προγραμμάτων.',
      },
      {
        icon: Shield,
        title: 'Συμπεριφορική Υποστήριξη',
        description:
          'Αξιολόγηση και παρέμβαση για συμπεριφορικά ζητήματα, συμπεριλαμβανομένης λειτουργικής ανάλυσης και στρατηγικών θετικής συμπεριφοράς.',
      },
    ],
  },
} as const

const t = computed(() => content[lang.value])
</script>
