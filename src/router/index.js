import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
// import store from '../store/index.js'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      disallowAuthed: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      disallowAuthed: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true

    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If a route proibits unauthorized access and
    // user is not authenticated user is redirected
    // to login page
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next('/login')
    }
  } else if (to.matched.some(record => record.meta.disallowAuthed && store.getters.isLoggedIn)) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
