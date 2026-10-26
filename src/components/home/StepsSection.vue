<template>
  <section id="como-trabajamos" class="scroll-mt-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <p class="eyebrow">Cómo trabajamos</p>
      <h2 class="section-title mt-3 max-w-2xl">Cuatro pasos, y pagas solo al final</h2>

      <ol class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, index) in STEPS" :key="step.title" class="relative rounded-2xl bg-paper p-6 ring-1 ring-navy-100">
          <span
            :class="[
              'flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-semibold text-white',
              index % 2 ? 'bg-red' : 'bg-navy-900',
            ]"
          >
            {{ index + 1 }}
          </span>
          <h3 class="mt-5 text-lg font-semibold text-navy-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-700">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { STEPS } from '@/data/site'
</script>
