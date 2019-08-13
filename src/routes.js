import ListsNav from "./components/ListsNav.vue";
import ListTable from "./components/ListTable.vue";
import VuexSample from "./components/VuexSample.vue";

const Bar = { template: "<div>bar</div>" };

export default [
  {
    path: "/lists",
    component: ListsNav,
    children: [
      {
        path: ":listName",
        component: ListTable
      }
    ]
  },
  {
    path: "/bar",
    component: Bar,
    beforeEnter: (to, from, next) => {
      const confirmed = window.confirm(
        "Are you sure that you want to go to Bar?"
      );

      if (confirmed) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/vuex",
    component: VuexSample
  }
];
