<template>
  <footer class="bg-navy-950 text-navy-100">
    <div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
      <div>
        <img src="/logo-on-dark.webp" :alt="SITE.name" class="h-24 w-auto" />
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/70">
          Te ayudamos a conectar con tu historia. Encontramos los documentos, tú conservas el legado.
        </p>
      </div>

      <div>
        <h3 class="font-sans text-sm font-semibold text-white">Contacto</h3>
        <ul class="mt-4 space-y-2 text-sm text-navy-100/70">
          <li><a :href="`mailto:${SITE.email}`" class="hover:text-white">{{ SITE.email }}</a></li>
          <li><a :href="SITE.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-white">Facebook</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-navy-100/60 sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {{ year }} {{ SITE.name }} · Creado por
          <a href="https://www.lorba.es" target="_blank" rel="noopener" class="font-medium text-navy-100/80 hover:text-white">Lorba</a>
        </p>
        <div class="flex gap-6">
          <RouterLink to="/aviso-legal" class="hover:text-white">Aviso legal</RouterLink>
          <RouterLink to="/privacidad" class="hover:text-white">Privacidad</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { SITE } from '@/data/site'

const year = new Date().getFullYear()
</script>
