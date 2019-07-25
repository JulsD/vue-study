import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router
});
