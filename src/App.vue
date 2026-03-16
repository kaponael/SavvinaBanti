<script setup lang="ts">
import { provideLanguage } from './composables/useLanguage'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import './assets/base.css'

provideLanguage()
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
