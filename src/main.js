import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";
import VueCookie from "vue-cookie";
import { routes } from "./Routes";
import { store } from "./store/store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(axios);
Vue.use(VueCookie);

export const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: (h) => h(App),
});
