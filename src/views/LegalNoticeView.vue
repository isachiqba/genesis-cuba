<template>
  <LegalPage title="Aviso legal">
    <h2>Titular del sitio web</h2>
    <p>Este sitio web pertenece a {{ SITE.name }}. Contacto: {{ SITE.email }}.</p>

    <h2>Objeto</h2>
    <p>
      La web informa sobre los servicios de investigación genealógica de {{ SITE.name }} y permite enviarnos los datos de
      una búsqueda. No se realizan pagos a través de ella.
    </p>

    <h2>Propiedad intelectual</h2>
    <p>Los textos, el logotipo y el diseño de esta web son propiedad de {{ SITE.name }} o de sus legítimos titulares.</p>

    <h2>Responsabilidad</h2>
    <p>
      Obtener un documento depende de que exista y de que esté disponible en los registros. Por eso evaluamos cada caso
      y solo se paga después de recibir el documento.
    </p>
  </LegalPage>
</template>

<script setup>
import LegalPage from '@/components/common/LegalPage.vue'
import { SITE } from '@/data/site'
</script>
