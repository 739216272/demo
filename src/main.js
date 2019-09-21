import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   console.log(to) => // 到哪个页面去？
//   console.log(from) => // 从哪个页面来？
//   next() => // 一个回调函数
// }
// router.afterEach（to，from） = {}
