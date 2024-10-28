import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductListView from '../views/ProductListView.vue'
import ContactusView from '../views/ContactusView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductListView,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactusView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
