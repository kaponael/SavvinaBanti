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

        <p class="mx-auto mt-5 max-w-5xl text-lg text-muted-foreground md:text-xl">
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
        title: 'Psycho-diagnostic Assessment of Child and Adolescent',
        description:
          "Psycho-diagnostic assessment is a comprehensive process of understanding the cognitive, emotional, social, and learning abilities of a child or adolescent. Using evidence-based tools, observation, and interviews with the child, family, and, when necessary, the school, the goal is to clearly identify the child's strengths and difficulties. The assessment contributes to the reliable diagnosis of learning difficulties, ADHD and autism, the early identification of emotional or behavioral difficulties, as well as to the formulation of individualized recommendations for support, both in the school and family environment.",
      },
      {
        icon: Shield,
        title: 'Individual Intervention for the Child/Adolescent',
        description:
          'Individual intervention offers personalized support to children and adolescents, with the aim of strengthening their emotional, behavioral, and social development and managing difficulties that affect their daily functioning.',
      },
      {
        icon: MessageCircle,
        title: 'Parent Counseling',
        description:
          "Parent counseling aims to support and empower parents in their role, offering guidance on understanding and managing their child's or adolescent's needs. Communication, emotional connection, and effective coping with daily difficulties are enhanced through collaboration and practical guidelines.",
      },
      {
        icon: Users,
        title: 'Teacher Counseling / Cooperation with Other Professionals',
        description:
          "Teacher counselling and cooperation with other specialists aim to provide coordinated support for the child within the school and broader context. Through the exchange of necessary information and joint planning, effective coping with difficulties and the enhancement of the child's functionality are promoted.",
      },
      {
        icon: Lightbulb,
        title: 'Experiential Workshops',
        description:
          'Experiential workshops provide a structured and interactive learning environment to promote social, emotional, and communication skills. Workshops can be customized to the needs of each organization or client (e.g., schools, youth centers, municipalities.',
      },
      {
        icon: BookOpen,
        title: 'Psychoeducational Seminars / Presentations',
        description:
          'Psychoeducational seminars and presentations provide reliable and practical information to parents, teachers, and professionals in order to understand the development, difficulties, and psychosocial functioning of children and adolescents. Seminars and presentations can be customized to the needs of the audience and the client, offering helpful tools and strategies for everyday use.',
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
        title: 'Ψυχο-διαγνωστική Αξιολόγηση Παιδιού και Εφήβου',
        description:
          'Η ψυχο-διαγνωστική αξιολόγηση αποτελεί μια ολοκληρωμένη διαδικασία κατανόησης των γνωστικών, συναισθηματικών, κοινωνικών και μαθησιακών δυνατοτήτων του παιδιού ή εφήβου. Μέσα από επιστημονικά τεκμηριωμένα εργαλεία, παρατήρηση και συνεντεύξεις με το παιδί, την οικογένεια και όπου χρειάζεται το σχολείο, στόχος είναι η σαφής αποτύπωση των δυνατών σημείων αλλά και των δυσκολιών του παιδιού. Η αξιολόγηση συμβάλλει στην έγκυρη διάγνωση μαθησιακών δυσκολιών, ΔΕΠ-Υ και αυτισμού, στην έγκαιρη αναγνώριση συναισθηματικών ή συμπεριφορικών δυσκολιών, καθώς και στην παροχή εξατομικευμένων εισηγήσεων για υποστήριξη στο σχολικό και οικογενειακό πλαίσιο.',
      },
      {
        icon: Shield,
        title: 'Ατομική Παρέμβαση Παιδιού/Εφήβου',
        description:
          'Η ατομική παρέμβαση προσφέρει εξατομικευμένη υποστήριξη σε παιδιά και εφήβους, με στόχο την ενίσχυση της συναισθηματικής, συμπεριφορικής και κοινωνικής τους ανάπτυξης και τη διαχείριση δυσκολιών που επηρεάζουν τη λειτουργικότητά τους στην καθημερινότητα.',
      },
      {
        icon: MessageCircle,
        title: 'Συμβουλευτική Γονέων',
        description:
          'Η συμβουλευτική γονέων στοχεύει στην υποστήριξη και ενδυνάμωση των γονέων στον ρόλο τους, προσφέροντας καθοδήγηση για την κατανόηση και τη διαχείριση των αναγκών του παιδιού ή εφήβου. Μέσα από συνεργασία και πρακτικές κατευθύνσεις, ενισχύεται η επικοινωνία, η συναισθηματική σύνδεση και η αποτελεσματική αντιμετώπιση καθημερινών δυσκολιών.',
      },
      {
        icon: Users,
        title: 'Συμβουλευτική Εκπαιδευτικών / Συνεργασία με άλλους ειδικούς',
        description:
          'Η συμβουλευτική εκπαιδευτικών και η συνεργασία με άλλους ειδικούς στοχεύει στη συντονισμένη υποστήριξη του παιδιού μέσα στο σχολικό και ευρύτερο πλαίσιο. Μέσα από ανταλλαγή πληροφοριών και κοινό σχεδιασμό, προάγεται η αποτελεσματική αντιμετώπιση δυσκολιών και η ενίσχυση της λειτουργικότητας του παιδιού.',
      },
      {
        icon: Lightbulb,
        title: 'Βιωματικά Εργαστήρια',
        description:
          ' Τα βιωματικά εργαστήρια παρέχουν ένα δομημένο και διαδραστικό περιβάλλον, με στόχο την ενίσχυση κοινωνικών, συναισθηματικών και επικοινωνιακών δεξιοτήτων. Τα εργαστήρια μπορούν να προσαρμοστούν στις ανάγκες του εκάστοτε φορέα ή πελάτη (π.χ. σχολεία, κέντρα, δήμοι)',
      },
      {
        icon: BookOpen,
        title: 'Ψυχοεκπαιδευτικά Σεμινάρια / Παρουσιάσεις',
        description:
          'Τα ψυχοεκπαιδευτικά σεμινάρια και οι παρουσιάσεις παρέχουν έγκυρη και πρακτική πληροφόρηση σε γονείς, εκπαιδευτικούς και επαγγελματίες, με στόχο την κατανόηση της ανάπτυξης, των δυσκολιών και της ψυχοκοινωνικής λειτουργίας παιδιών και εφήβων. Τα σεμινάρια και οι παρουσιάσεις μπορούν να προσαρμοστούν στις ανάγκες του κοινού και του πελάτη, προσφέροντας χρήσιμα εργαλεία και στρατηγικές για καθημερινή εφαρμογή.',
      },
    ],
  },
} as const

const t = computed(() => content[lang.value])
</script>
