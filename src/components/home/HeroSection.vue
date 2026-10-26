<template>
  <section class="relative overflow-hidden">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="eyebrow">Investigación genealógica en Cuba</p>
        <h1 class="mt-5 max-w-2xl text-4xl leading-[1.08] font-semibold text-navy-900 sm:text-5xl lg:text-6xl">
          Te ayudamos a conectar con <span class="text-red">tu historia</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-navy-700 sm:text-lg">
          {{ SITE.description }}
        </p>
        <div class="mt-10 flex flex-wrap gap-3">
          <RouterLink to="/#tu-caso" class="btn-primary">
            Envíanos tu caso
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
          <RouterLink to="/#como-trabajamos" class="btn-secondary">Cómo trabajamos</RouterLink>
        </div>

        <ul class="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-navy-700">
          <li v-for="point in points" :key="point.label" class="flex items-center gap-2">
            <component :is="point.icon" class="h-5 w-5 text-blue" />
            {{ point.label }}
          </li>
        </ul>
      </div>

      <div class="relative mx-auto w-full max-w-md">
        <div class="absolute inset-6 rounded-full bg-blue/10 blur-3xl" aria-hidden="true"></div>
        <img src="/logo.webp" :alt="`Logo de ${SITE.name}`" class="relative w-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, FileText, Lock, ShieldCheck } from 'lucide-vue-next'
import { SITE } from '@/data/site'

const points = [
  { icon: ShieldCheck, label: 'Sin pago por adelantado' },
  { icon: FileText, label: 'Documento en PDF' },
  { icon: Lock, label: 'Total confidencialidad' },
]
</script>
