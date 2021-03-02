import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }, {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart,
    propse: true
  }, {
    path: "/catalog",
    name: "Catalog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Catalog,
    propse: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;