import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/formulario.vue'),
    meta: { rutaProtegida: true }
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: () => import('../views/Update.vue'),
    meta: { rutaProtegida: true }
  },
  {
    path: '/api-rest',
    name: 'ApiRest',
    component: () => import('../views/ApiRest.vue'),
    meta: { rutaProtegida: true }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  console.log(to.meta.rutaProtegida)
  if (to.meta.rutaProtegida) {
    if (store.getters.usuarioAutenticado) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
