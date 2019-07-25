// ListsNav.vue
<template v-if="dataLoaded">
  <main>
    <h2>{{ description }}</h2>
    <ul>
      <li
        v-for="(tableLink, tableName) of tablesList"
        :key="tableName"
        :class="{ active: activeList == tableName }">
        <router-link :to="`/lists/${tableName}`" @click="updateActiveList(tableName)">{{ tableName | capitalize }}</router-link>
      </li>
    </ul>
    <section>
      <transition name="fade"
                  :duration="{ enter: 800, leave: 500 }"
                  mode="out-in">
          <router-view></router-view>
      </transition>
    </section>
  </main>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 20px 0;
  }

  ul li a {
    padding: 5px 10px;
    border-right: 1px solid darkgray;
    cursor: pointer;
  }

  ul li a:hover,
  ul li.active a {
    background-color: aliceblue;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<script>
import _ from "lodash";
import ListTable from "./ListTable.vue";

export default {
  data: () => {
    return {
      description: "Chose the list:",
      tablesList: null,
      activeList: null,
      dataLoaded: false
    };
  },
  created: function() {
    let vm = this;
    fetch("https://swapi.co/api/")
      .then(response => response.json())
      .then(data => {
        vm.tablesList = data;
        vm.updateActiveList();
        vm.dataLoaded = true;
      })
      .catch(error => console.error("error", error));
  },
  methods: {
    updateActiveList(listName) {
      this.activeList = listName || Object.keys(this.tablesList)[0];
    }
  },
  filters: {
    capitalize: v => {
      return _.capitalize(v);
    }
  }
};
</script>