import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
// Part 8.3 Router
import VueRouter from "vue-router";
// Part 8.3 Router
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import {
  faShoppingCart,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

// Part 8.3 Router
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products
    },
    {
      path: "/checkout",
      component: Checkout
    }
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
