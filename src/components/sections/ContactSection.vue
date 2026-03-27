<template>
  <section id="contact" class="relative overflow-x-hidden bg-background py-24 md:py-36">
    <!-- Hard divider line at top -->
    <div class="absolute left-0 right-0 top-0 h-1 bg-primary/20" />

    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <SectionHeader :tag="t.tag" :title="t.title" :subtitle="t.subtitle" />

      <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
        <!-- Contact Details Card -->
        <div
          class="space-y-8 rounded-2xl border-2 border-border bg-card p-6 shadow-lg shadow-foreground/5 sm:p-8 md:p-10"
        >
          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Phone class="h-6 w-6" />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-muted-foreground">{{ t.phoneLabel }}</p>
              <a
                href="tel:+35799735790"
                class="block wrap-break-word text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {{ t.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Mail class="h-6 w-6" />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-muted-foreground">Email</p>
              <a
                href="mailto:savvinabanti@hotmail.com"
                class="block break-all text-lg font-bold text-foreground transition-colors hover:text-primary sm:wrap-break-word"
              >
                {{ t.email }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Globe class="h-6 w-6" />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-muted-foreground">Website</p>
              <a
                href="https://www.sbanti.com"
                target="_blank"
                rel="noopener noreferrer"
                class="block break-all text-lg font-bold text-foreground transition-colors hover:text-primary sm:wrap-break-word"
              >
                {{ t.website }}
              </a>
            </div>
          </div>

          <div class="flex items-center gap-5">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Clock class="h-6 w-6" />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-muted-foreground">
                {{ t.hoursLabel }}
              </p>
              <p class="wrap-break-word text-lg font-bold text-foreground">
                {{ t.hours }}
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
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
          class="space-y-8 rounded-2xl border-2 border-border bg-card p-6 shadow-lg shadow-foreground/5 sm:p-8 md:p-10"
        >
          <h3 class="text-base font-bold uppercase tracking-widest text-primary">
            {{ t.officeLabel }}
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-5">
              <div
                class="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                <MapPin class="h-6 w-6" />
              </div>
              <div class="min-w-0">
                <p class="wrap-break-word text-lg font-bold text-foreground">
                  {{ t.office1 }}
                </p>
                <p class="wrap-break-word text-sm font-medium text-muted-foreground">
                  {{ t.office1detail }}
                </p>
              </div>
            </div>

            <div class="flex items-start gap-5 invisible">
              <div
                class="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                <MapPin class="h-6 w-6" />
              </div>
              <div class="min-w-0">
                <p class="wrap-break-word text-lg font-bold text-foreground">
                  {{ t.office2 }}
                </p>
                <p class="wrap-break-word text-sm font-medium text-muted-foreground">
                  {{ t.office2detail }}
                </p>
              </div>
            </div>
          </div>

          <!-- Embedded Map -->
          <div class="overflow-hidden rounded-2xl border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.891200740571!2d33.342228375423026!3d35.15933405846739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1b9619168c5b%3A0x1dd92a567bc38e3a!2sThe%20Safe%20Place%20Project%20(Strovolos)!5e0!3m2!1sen!2s!4v1774639685601!5m2!1sen!2s"
              width="100%"
              height="220"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
import SectionHeader from '../SectionHeader.vue'

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
    hours: 'Mon - Sat: 8:00 - 19:00',
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
    hours: 'Δευ - Σαβ: 8:00 - 19:00',
    hoursLabel: 'Ώρες Λειτουργίας',
    officeLabel: 'Τοποθεσίες Γραφείων',
    cta: 'Αποστολή Email',
    callCta: 'Καλέστε Τώρα',
  },
} as const

const t = computed(() => content[lang.value])
</script>
