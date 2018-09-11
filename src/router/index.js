import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/views/Home.vue'

Vue.use(Router)

const DEFAULT_TITLE = 'DEFAULT_TITLE'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: DEFAULT_TITLE } },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Login' },
      component: () =>
        import ('../views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About' },
      component: () =>
        import ('../views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.title || to.meta.title === DEFAULT_TITLE) {
    store.dispatch('setDefaultTitle')
  }
  else {
    store.dispatch('setTitle', to.meta.title)
  }
  next()
})

export default router
