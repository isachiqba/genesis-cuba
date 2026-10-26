import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LegalNoticeView from '@/views/LegalNoticeView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import { SITE } from '@/data/site'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/aviso-legal',
    name: 'legal-notice',
    component: LegalNoticeView,
    meta: { title: 'Aviso legal' },
  },
  {
    path: '/privacidad',
    name: 'privacy-policy',
    component: PrivacyPolicyView,
    meta: { title: 'Política de privacidad' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduceMotion ? 'auto' : 'smooth'
    if (to.hash) return { el: to.hash, top: 80, behavior }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline} en Cuba`
})

export default router
