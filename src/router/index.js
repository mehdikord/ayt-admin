import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue";
import {Menu} from "@vicons/ionicons5";
import Slidebar from "@/components/menu/Slidebar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path : '/slidebar',
      name : 'menu',
      component : Slidebar,
    }
  ],
})

export default router
