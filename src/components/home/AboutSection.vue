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
      </div>
    </div>
  </section>
</template>

<script setup>
import { SITE } from '@/data/site'
</script>
