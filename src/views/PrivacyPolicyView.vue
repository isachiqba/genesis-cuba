<template>
  <LegalPage title="Política de privacidad">
    <h2>Responsable</h2>
    <p>{{ SITE.name }}. Contacto: {{ SITE.email }}.</p>

    <h2>Qué datos tratamos</h2>
    <p>
      Esta web no guarda datos. El formulario abre tu propio correo con la información escrita, y solo nos llega si
      decides enviarlo. Usamos esos datos, los tuyos y los de la persona que buscas, únicamente para hacer la búsqueda
      y enviarte el documento.
    </p>

    <h2>Confidencialidad</h2>
    <p>No compartimos tu información con terceros salvo lo necesario para consultar los registros donde está el documento.</p>

    <h2>Tus derechos</h2>
    <p>Puedes pedir acceder, rectificar o borrar tus datos escribiendo a {{ SITE.email }}.</p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '@/components/common/LegalPage.vue'
import { SITE } from '@/data/site'
</script>
