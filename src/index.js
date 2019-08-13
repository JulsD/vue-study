import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import routes from "./routes";
import stores from "./stores";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for `routes: routes`
});

const store = new Vuex.Store(stores);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router,
  store
});
