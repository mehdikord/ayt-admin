import { createRouter, createWebHistory } from 'vue-router'
import {Menu} from "@vicons/ionicons5";
import Slidebar from "@/components/menu/Slidebar.vue";
/////////////////////////////////////////////////////////////////////
import route_users from "@/router/users/users.js"
import route_customers from "@/router/customers/customers.js";
import Dashboard from "@/views/dashboard/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


      {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard,

      },
 
    {
      path : '/slidebar',
      name : 'menu',
      component : Slidebar,
    },
        ...route_users,
        ...route_customers,
  ],
})

export default router
