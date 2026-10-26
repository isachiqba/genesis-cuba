<template>
  <article class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
    <h1 class="text-3xl font-bold text-navy-900">{{ title }}</h1>
    <div class="legal mt-8 space-y-4 text-sm leading-relaxed text-navy-700">
      <slot />
    </div>
  </article>
</template>

<script setup>
defineProps({ title: { type: String, required: true } })
</script>

<style scoped>
@reference "@/assets/styles/main.css";

.legal :deep(h2) {
  @apply pt-4 text-lg font-semibold text-navy-900;
}
</style>
