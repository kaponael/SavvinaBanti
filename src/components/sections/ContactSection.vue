<template>
  <section id="contact" class="relative bg-background py-28 md:py-36">
    <!-- Hard divider line at top -->
    <div class="absolute left-0 right-0 top-0 h-1 bg-primary/20" />

    <div class="mx-auto max-w-7xl px-6">
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

      <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <!-- Contact Details Card -->
        <div
          class="space-y-8 rounded-2xl border-2 border-border bg-card p-10 shadow-lg shadow-foreground/5"
        >
          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Phone class="h-6 w-6" />
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">{{ t.phoneLabel }}</p>
              <a
                href="tel:+35799735790"
                class="text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {{ t.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Mail class="h-6 w-6" />
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">Email</p>
              <a
                href="mailto:savvinabanti@hotmail.com"
                class="text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {{ t.email }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Globe class="h-6 w-6" />
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">Website</p>
              <a
                href="https://www.sbanti.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {{ t.website }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Clock class="h-6 w-6" />
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">
                {{ t.hoursLabel }}
              </p>
              <p class="text-lg font-bold text-foreground">
                {{ t.hours }}
              </p>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
            <a
              href="mailto:savvinabanti@hotmail.com"
              class="flex-1 rounded-full bg-primary py-4 text-center text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/35"
            >
              {{ t.cta }}
            </a>
            <a
              href="tel:+35799735790"
              class="flex-1 rounded-full border-2 border-border py-4 text-center text-base font-bold text-foreground transition-all hover:border-primary hover:bg-primary/5"
            >
              {{ t.callCta }}
            </a>
          </div>
        </div>

        <!-- Office Locations Card -->
        <div
          class="space-y-8 rounded-2xl border-2 border-border bg-card p-10 shadow-lg shadow-foreground/5"
        >
          <h3 class="text-base font-bold uppercase tracking-widest text-primary">
            {{ t.officeLabel }}
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-5">
              <div
                class="mt-0.5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                <MapPin class="h-6 w-6" />
              </div>
              <div>
                <p class="text-lg font-bold text-foreground">
                  {{ t.office1 }}
                </p>
                <p class="text-sm font-medium text-muted-foreground">
                  {{ t.office1detail }}
                </p>
              </div>
            </div>

            <div class="flex items-start gap-5 invisible">
              <div
                class="mt-0.5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                <MapPin class="h-6 w-6" />
              </div>
              <div>
                <p class="text-lg font-bold text-foreground">
                  {{ t.office2 }}
                </p>
                <p class="text-sm font-medium text-muted-foreground">
                  {{ t.office2detail }}
                </p>
              </div>
            </div>
          </div>

          <!-- Embedded Map -->
          <div class="overflow-hidden rounded-2xl border-2 border-border">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.5!2d33.35!3d35.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA5JzAwLjAiTiAzM8KwMjEnMDAuMCJF!5e0!3m2!1sen!2scy!4v1700000000000!5m2!1sen!2scy"
              width="100%"
              height="220"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale transition-all duration-500 hover:grayscale-0"
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
import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-vue-next'

const { lang } = useLanguage()

const content = {
  en: {
    tag: 'Contact',
    title: 'Get in Touch',
    subtitle: 'Feel free to reach out for consultations, questions, or to schedule an appointment.',
    phoneLabel: 'Phone / WhatsApp / Viber',
    phone: '(+357) 99 735790',
    email: 'savvinabanti@hotmail.com',
    website: 'www.sbanti.com',
    office1: 'Damonos 14, Galazis Court 2',
    office1detail: 'Strovolos 5th Floor, 2064, Nicosia',
    office2: '',
    office2detail: '',
    hours: 'Mon - Fri: 9:00 - 18:00',
    hoursLabel: 'Working Hours',
    officeLabel: 'Office Locations',
    cta: 'Send Email',
    callCta: 'Call Now',
  },
  gr: {
    tag: 'Επικοινωνία',
    title: 'Επικοινωνήστε Μαζί Μου',
    subtitle:
      'Μη διστάσετε να επικοινωνήσετε για συμβουλευτική, ερωτήσεις ή για να κλείσετε ραντεβού.',
    phoneLabel: 'Τηλέφωνο / WhatsApp / Viber',
    phone: '(+357) 99 735790',
    email: 'savvinabanti@hotmail.com',
    website: 'www.sbanti.com',
    office1: 'Damonos 14, Galazis Court 2',
    office1detail: 'Strovolos 5th Floor, 2064, Nicosia',
    office2: '',
    office2detail: '',
    hours: 'Δευ - Παρ: 9:00 - 18:00',
    hoursLabel: 'Ώρες Λειτουργίας',
    officeLabel: 'Τοποθεσίες Γραφείων',
    cta: 'Αποστολή Email',
    callCta: 'Καλέστε Τώρα',
  },
} as const

const t = computed(() => content[lang.value])
</script>
