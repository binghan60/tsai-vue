import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '../views/MemberView.vue'
import ProductListView from '../views/ProductListView.vue'
import CartView from '../views/CartView.vue'
import StyleGuild from '../views/StyleGuildView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/member',
      name: 'member',
      component: MemberView,
    },

    {
      path: '/productlist',
      name: 'productlist',
      component: ProductListView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/styleGuild',
      name: 'styleGuild',
      component: StyleGuild,
    },
  ],
})

export default router
