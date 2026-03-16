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

      <div class="mx-auto max-w-6xl space-y-6 text-center">
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description }}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description2 }}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description3 }}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description4 }}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {{ t.description5 }}
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
      "My name is Savvina Banti and I am a Registered School / Educational Psychologist (Registration No. 1070). I am a graduate of the Department of Psychology at the University of Cyprus and hold a Master's Degree in School Psychology (MA) from the same university, with a particular research interest in the cognitive and linguistic profiles of children with learning difficulties and chronic conditions, such as epilepsy. My postgraduate studies were supported by an educational scholarship from the Onassis Foundation.",
    description2:
      'As part of my professional training, I completed approximately 1800 hours of supervised practical training as a Trainee School / Educational Psychologist at the Educational Psychology Service of the Ministry of Education, Sports, and Youth. During this time, I gained significant experience in psycho-diagnostic assessment, individualized intervention, and counseling of children and adolescents across all educational levels. I also gained experience in counseling parents and teachers, as well as in designing and implementing intervention programs, psychoeducational presentations, and experiential workshops',
    description3:
      'During my studies, I worked on research projects at the Center for Applied Neuroscience (e.g., Neo-PRISM-C, ReaDI-STANCE), gaining experience in cognitive assessments and psychophysiological measurements (e.g., eye-tracking, EEG) with school-aged children. I later worked as a research assistant at Stockholm University, where I studied the development of emotional regulation in children and adolescents.',
    description4:
      'At the same time, I participated in a European research project led by the Hope For Children CRC Policy Center, where I was trained as an activist to strengthen actions against hate speech in Cyprus. I am also accredited as a trainer for the ViSC program for the prevention of school bullying, through which I have provided training to parents and teachers.',
    description5:
      'I currently work in private practice in the Nicosia district, where I provide psychological services to children, adolescents, parents, and teachers.',
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
      'Ονομάζομαι Σαββίνα Μπαντή και είμαι Εγγεγραμμένη Σχολική/Εκπαιδευτική Ψυχολόγος (Αρ. Μητρώου 1070). Είμαι απόφοιτη του Τμήματος Ψυχολογίας του Πανεπιστημίου Κύπρου και κάτοχος Μεταπτυχιακού στη Σχολική Ψυχολογία (MA) από το ίδιο Πανεπιστήμιο, με ιδιαίτερο ερευνητικό ενδιαφέρον στα γνωστικά και γλωσσικά προφίλ παιδιών με μαθησιακές δυσκολίες και με χρόνιες παθήσεις, όπως η επιληψία. Οι μεταπτυχιακές μου σπουδές υποστηρίχθηκαν από εκπαιδευτική υποτροφία του Ιδρύματος Ωνάση.',
    description2:
      'Στο πλαίσιο της επαγγελματικής μου κατάρτισης, ολοκλήρωσα ~1800 ώρες εποπτευόμενης πρακτικής άσκησης ως Ειδικευόμενη Σχολική/Εκπαιδευτική Ψυχολόγος στην Υπηρεσία Εκπαιδευτικής Ψυχολογίας του Υπουργείου Παιδείας, Αθλητισμού και Νεολαίας, αποκτώντας σημαντική εμπειρία στην ψυχομετρική και διαγνωστική αξιολογήση και στην εξατομικευμένη παρέμβαση και θεραπεία παιδιών και εφήβων όλων των εκπαιδευτικών βαθμίδων. Επίσης, απέκτησα εμπειρία στην συμβουλευτική γονέων και εκπαιδευτικών, καθώς και στον σχεδιασμό και την εφαρμογή παρεμβατικών προγραμμάτων,  ψυχοεκπαιδευτικών παρουσιάσεων και βιωματικών εργαστηρίων.',
    description3:
      'Κατά την διάρκεια των σπουδών μου, έχω εργαστεί σε ερευνητικά προγράμματα του Κέντρου Εφαρμοσμένης Νευροεπιστήμης (π.χ. Neo-PRISM-C, ReaDI-STANCE), με εμπειρία σε γνωστικές αξιολογήσεις και ψυχοφυσιολογικές μετρήσεις (π.χ. eye-tracking, EEG) σε παιδιά σχολικής ηλικίας. Έπειτα, δραστηριοποιήθηκα ως ερευνητικό προσωπικό στο Πανεπιστήμιο Στοκχόλμης μελετώντας την ανάπτυξη της συναισθηματικής ρύθμισης στα παιδιά και στους εφήβους.',
    description4:
      'Παράλληλα, συμμετείχα σε ευρωπαϊκό ερευνητικό πρόγραμμα του Hope For Children CRC Policy Center, όπου εκπαιδεύτηκα ως ακτιβίστρια για την ενίσχυση δράσεων κατά της ρητορικής μίσους (hate speech) στην κυπριακή κοινωνία. Επίσης, έχω διαπιστευθεί ως εκπαιδεύτρια του προγράμματος ViSC για την πρόληψη του σχολικού εκφοβισμού, κατά το οποίο πραγματοποίησα εκπαιδεύσεις γονέων και εκπαιδευτικών.',
    description5:
      'Στην παρούσα φάση, εργάζομαι ιδιωτικά στην επαρχία Λευκωσίας προσφέροντας ψυχολογικές υπηρεσίες σε παιδιά, εφήβους, γονείς και εκπαιδευτικούς.',
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
