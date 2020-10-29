import { createRouter, createWebHistory } from 'vue-router'
import Base from '../views/Base.vue'

const routes = [
  // Root redirect with raw path
  { path: '/', redirect: '/steps/1' },
  {
    // Dynamic route matching (segment)
    // path: '/steps/:id', // "Default", catch everything behind /steps/
    path: '/steps/:id([0-9]+)', // Regex to catch only numbers
    name: 'Base',
    component: Base,
  },
  // Catch all redirect with route object
  { path: '/:catchAll(.*)*', redirect: { name: 'Base', params: { id: 1 } } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
