import ListsNav from "./components/ListsNav.vue";
import ListTable from "./components/ListTable.vue";

const Bar = { template: "<div>bar</div>" };

// const List = {
//   template:
//     "<list-table :key='`${$route.params.listName}List`' :list-name='$route.params.listName'></list-table>"
// };

const routes = [
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
  }
];

export default routes;
