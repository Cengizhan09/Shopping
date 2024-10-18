import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/Register.vue";
import Admin from "../views/Admin.vue";
import NewProduct from "../components/products/NewProduct.vue";
import DashBoard from "../components/admin/Dashboard.vue";
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        name: "Dashboard",
        path: "dashboard",
        component: DashBoard,
      },
      {
        name: "Add Product",
        path: "product/add",
        component: NewProduct,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
