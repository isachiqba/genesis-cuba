<template>
  <section id="servicios" class="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6">
    <p class="eyebrow">Servicios</p>
    <h2 class="section-title mt-3 max-w-2xl">Buscamos los documentos de tu familia en Cuba</h2>

    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="service in SERVICES" :key="service.title" class="rounded-2xl bg-white p-6 ring-1 ring-navy-100">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
          <component :is="icons[service.icon]" class="h-6 w-6" />
        </span>
        <h3 class="mt-5 text-lg font-semibold text-navy-900">{{ service.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-navy-700">{{ service.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Church, FileSearch, Landmark, Network } from 'lucide-vue-next'
import { SERVICES } from '@/data/site'

const icons = { Church, FileSearch, Landmark, Network }
</script>
