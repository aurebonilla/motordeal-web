import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Support from './pages/Support.vue';
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/SignUp.vue';
import ResetPassword from './pages/ResetPassword.vue';
import PageNotFound from './pages/PageNotFound.vue';
import createVehicle from './pages/createVehicle.vue';
import misVehicles from './pages/misVehicles.vue';


const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/support',
      component: Support
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/misVehicles',
      component: misVehicles,
      meta: { requiresAuth: true }
    },
    {
      path: '/createVehicles',
      component: createVehicle,
      meta: { requiresAuth: true }
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe(); // Deja de escuchar cambios en la autenticación
      if (user) {
        next(); // Usuario autenticado, permitir acceso
      } else {
        next('/signin'); // Usuario no autenticado, redirigir a /signin
      }
    });
  } else {
    next(); // Ruta no requiere autenticación, permitir acceso
  }
});
export default router
