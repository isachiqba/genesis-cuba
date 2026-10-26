<template>
  <section id="garantias" class="scroll-mt-20 bg-navy-900 text-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <p class="eyebrow text-[#ff8a8b]!">Qué nos distingue</p>
      <h2 class="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Trabajamos para que no arriesgues nada</h2>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in GUARANTEES" :key="item.title" class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <component :is="icons[item.icon]" class="h-7 w-7 text-[#6cb6e0]" />
          <h3 class="mt-4 text-lg font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-navy-100/75">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BadgeCheck, Eye, Lock, Mail, Search, ShieldCheck } from 'lucide-vue-next'
import { GUARANTEES } from '@/data/site'

const icons = { BadgeCheck, Eye, Lock, Mail, Search, ShieldCheck }
</script>
