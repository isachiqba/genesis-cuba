<template>
  <header
    :class="[
      'sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-shadow duration-300',
      isScrolled ? 'border-navy-100 shadow-sm' : 'border-transparent',
    ]"
  >
    <nav class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-3" :aria-label="`${SITE.name}, inicio`">
        <img src="/tree.webp" alt="" class="h-10 w-auto" />
        <span class="leading-tight">
          <span class="block font-display text-xl font-semibold text-navy-900">Génesis</span>
          <span class="block text-[11px] font-medium tracking-[0.18em] text-navy-700 uppercase">{{ SITE.tagline }}</span>
        </span>
      </RouterLink>

      <ul class="hidden items-center gap-10 lg:flex">
        <li v-for="item in menu" :key="item.label">
          <RouterLink :to="item.to" class="text-sm font-medium text-navy-700 transition-colors hover:text-red">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>

      <RouterLink to="/#tu-caso" class="btn-primary hidden lg:inline-flex">Envíanos tu caso</RouterLink>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy-900 lg:hidden"
        :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-navy-100 bg-paper px-6 py-6 lg:hidden">
        <ul class="space-y-5">
          <li v-for="item in [...menu, { label: 'Envíanos tu caso', to: '/#tu-caso' }]" :key="item.label">
            <RouterLink :to="item.to" class="block text-lg font-medium text-navy-900" @click="isOpen = false">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { SITE } from '@/data/site'

const menu = [
  { label: 'Servicios', to: '/#servicios' },
  { label: 'Cómo trabajamos', to: '/#como-trabajamos' },
  { label: 'Quiénes somos', to: '/#quienes-somos' },
  { label: 'Preguntas', to: '/#preguntas' },
]

const isOpen = ref(false)
const isScrolled = ref(false)
const onScroll = () => (isScrolled.value = window.scrollY > 8)

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
