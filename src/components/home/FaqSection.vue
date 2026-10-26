<template>
  <section id="preguntas" class="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
    <p class="eyebrow">Preguntas frecuentes</p>
    <h2 class="section-title mt-3">Lo que más nos preguntan</h2>

    <div class="mt-10 divide-y divide-navy-100 border-y border-navy-100">
      <details v-for="faq in FAQS" :key="faq.question" class="group py-5">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-navy-900">
          {{ faq.question }}
          <ChevronDown class="h-5 w-5 shrink-0 text-navy-700 transition-transform group-open:rotate-180" />
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-navy-700">{{ faq.answer }}</p>
      </details>
    </div>
  </section>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { FAQS } from '@/data/site'
</script>
