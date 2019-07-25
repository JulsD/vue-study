import ListsNav from "./components/ListsNav.vue";

const Bar = { template: "<div>bar</div>" };
const PlanetsList = {
  template: "<div>List {{$route.params.listName}}</div>"
};

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
        component: PlanetsList
      }
    ]
  },
  { path: "/bar", component: Bar }
];

export default routes;
