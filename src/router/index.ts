import { createRouter, createWebHistory } from 'vue-router'

import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue'
import HomePage from '@/modules/landing/pages/HomePage.vue'
import AuthLayout from '@/modules/auth/layout/AuthLayout.vue'
import NotFound404 from '@/modules/common/pages/NotFound404.vue'
import isAuthenticatedGuard from '@/modules/auth/guard/is-authenticated.guard'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue')
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue')
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? { id: 1 } : { id }
          },
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue')
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'auth',
          redirect: { name: 'login' }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue')
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound404 }
  ]
})
