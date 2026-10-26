<template>
  <section id="quienes-somos" class="scroll-mt-20 bg-white">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <img src="/tree.webp" alt="" class="mx-auto w-56 sm:w-72" />

      <div>
        <p class="eyebrow">Quiénes somos</p>
        <h2 class="section-title mt-3">Un puente entre el pasado y el presente</h2>
        <div class="mt-6 space-y-4 leading-relaxed text-navy-700">
          <p>
            {{ SITE.name }} es un equipo de investigadores especializados en la búsqueda de antepasados en Cuba.
            Buscamos documentos eclesiásticos y civiles, como certificados de bautismo, matrimonio y defunción.
          </p>
          <p>
            Hemos trabajado con numerosos clientes extranjeros, ayudándoles a descubrir sus raíces cubanas y a obtener
            documentos valiosos para sus investigaciones personales o legales. Nuestro conocimiento del territorio
            cubano y de sus archivos históricos nos permite ofrecer un servicio profesional, confiable y adaptado a cada
            cliente.
          </p>
          <p class="font-display text-xl text-navy-900">
            Estamos comprometidos con preservar y conectar las historias familiares.
          </p>
        </div>

        <div class="mt-10">
          <p class="text-xs font-semibold tracking-[0.2em] text-navy-700 uppercase">Al frente de {{ SITE.name }}</p>
          <ul class="mt-4 flex flex-wrap gap-4">
            <li v-for="person in SITE.team" :key="person" class="flex items-center gap-3 rounded-full bg-paper py-2 pr-5 pl-2 ring-1 ring-navy-100">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white" aria-hidden="true">
                {{ initials(person) }}
              </span>
              <span class="leading-tight">
                <span class="block text-sm font-semibold text-navy-900">{{ person }}</span>
                <span class="block text-xs text-navy-700">Dirección</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SITE } from '@/data/site'

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
</script>
