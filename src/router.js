import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import base from "./router/base";
import Login from "./views/Login.vue";
import test from "./router/test";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
      children:[
        ...base,
        ...test
      ]
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    }
  ]
});
