import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

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
