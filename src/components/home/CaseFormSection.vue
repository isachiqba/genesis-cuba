<template>
  <section id="tu-caso" class="scroll-mt-20 bg-paper-dark">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p class="eyebrow">Paso 1</p>
        <h2 class="section-title mt-3">Envíanos tu caso</h2>
        <p class="mt-4 max-w-md text-navy-700">
          Cuéntanos a quién buscas y qué documento necesitas. Al enviar se abrirá tu correo con los datos ya escritos,
          listos para mandárnoslos.
        </p>
        <p class="mt-6 text-sm text-navy-700">
          ¿Prefieres escribirnos directamente?<br />
          <a :href="`mailto:${SITE.email}`" class="font-semibold text-blue hover:underline">{{ SITE.email }}</a>
          <template v-if="SITE.messenger">
            ·
            <a :href="SITE.messenger" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue hover:underline">
              Messenger
            </a>
          </template>
        </p>
      </div>

      <form class="grid gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 sm:grid-cols-2 sm:p-8" @submit.prevent="send">
        <fieldset class="contents">
          <legend class="font-display text-lg font-semibold text-navy-900 sm:col-span-2">Tus datos</legend>
          <label class="text-sm font-medium text-navy-900">
            Tu nombre
            <input v-model="form.name" required autocomplete="name" class="field" />
          </label>
          <label class="text-sm font-medium text-navy-900">
            Tu correo
            <input v-model="form.email" type="email" required autocomplete="email" class="field" />
          </label>
        </fieldset>

        <fieldset class="contents">
          <legend class="mt-2 font-display text-lg font-semibold text-navy-900 sm:col-span-2">La persona que buscas</legend>
          <label class="text-sm font-medium text-navy-900 sm:col-span-2">
            Nombre y apellidos
            <input v-model="form.person" required class="field" />
          </label>
          <label class="text-sm font-medium text-navy-900">
            Fechas aproximadas
            <input v-model="form.dates" placeholder="Nacimiento, matrimonio…" class="field" />
          </label>
          <label class="text-sm font-medium text-navy-900">
            Lugar
            <input v-model="form.place" placeholder="Municipio y provincia" class="field" />
          </label>
          <label class="text-sm font-medium text-navy-900 sm:col-span-2">
            Documento que buscas
            <input v-model="form.document" required class="field" />
          </label>
          <label class="text-sm font-medium text-navy-900 sm:col-span-2">
            Otros datos que puedan ayudar
            <textarea v-model="form.notes" rows="4" placeholder="Nombres de los padres, parroquia, cualquier detalle…" class="field"></textarea>
          </label>
        </fieldset>

        <div class="sm:col-span-2">
          <button type="submit" class="btn-primary w-full sm:w-auto">
            <Send class="h-4 w-4" />
            Enviar mi caso
          </button>
          <p class="mt-3 text-xs text-navy-700">
            Sin pago por adelantado. Usamos tus datos solo para hacer la búsqueda.
            <RouterLink to="/privacidad" class="underline">Privacidad</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { Send } from 'lucide-vue-next'
import { SITE } from '@/data/site'

const form = reactive({ name: '', email: '', person: '', dates: '', place: '', document: '', notes: '' })

// Sin servidor: abre el correo del cliente con el caso ya redactado.
const send = () => {
  const body = [
    `Nombre: ${form.name}`,
    `Correo: ${form.email}`,
    '',
    `Persona que busco: ${form.person}`,
    `Fechas aproximadas: ${form.dates || '-'}`,
    `Lugar: ${form.place || '-'}`,
    `Documento que busco: ${form.document}`,
    '',
    `Otros datos: ${form.notes || '-'}`,
  ].join('\n')
  const subject = `Nueva búsqueda: ${form.person}`
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>
