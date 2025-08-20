import { createRouter, createWebHistory } from 'vue-router'
import {Menu} from "@vicons/ionicons5";
import Slidebar from "@/components/menu/Slidebar.vue";
/////////////////////////////////////////////////////////////////////
import route_users from "@/router/users/users.js"
import route_customers from "@/router/customers/customers.js";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import route_products from "@/router/products/products.js";
import route_categories_products from "@/router/categories_products/categories_products.js";
import route_options from "@/router/options/options.js";
import route_discount from "@/router/discount/discount.js";
import route_blog from "@/router/blog/blog.js";
import route_blog_categories from "@/router/blog_categories/blog_categories.js";

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
        ...route_products,
        ...route_categories_products,
        ...route_discount,
        ...route_blog,
        ...route_blog_categories,
        ...route_options
  ],
})

export default router
