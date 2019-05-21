// ListsNav.vue

<template v-if="dataLoaded">
  <main>
    <h2>{{ description }}</h2>
    <ul>
      <li
        v-for="(tableLink, tableName) of tablesList"
        :key="tableName"
        :class="{ active: activeList == tableName }"
      >
        <a :data-href="tableLink" @click="updateActiveList(tableName)">
            {{ tableName | capitalize }}
        </a>
      </li>
    </ul>
    <section>
      <h2>{{activeList | capitalize}}</h2>
      <transition name="fade"
                  :duration="{ enter: 800, leave: 500 }"
                  mode="out-in">
          <ListTable :key="`${activeList}List`" :list-data="activeListData" :list-name="activeList"></ListTable>
      </transition>
    </section>
  </main>
</template>

<script>
import _ from 'lodash';
import ListTable from './ListTable.vue';

export default {
  data: () => {
    return {
      description: "Chose the list:",
      tablesList: null,
      activeList: null,
      activeListData: null,
      dataLoaded: false
    };
  },
  created: function () {
      let vm = this;
      fetch("https://swapi.co/api/")
        .then(response => response.json())
        .then(data => {
            vm.tablesList = data;
            vm.updateActiveList();
            vm.dataLoaded = true;
            })
        .catch(error => console.error('error', error));
  },
  methods: {
    updateActiveList(listName) {
      this.activeList = listName || Object.keys(this.tablesList)[0];
      this.getactiveListData(listName);
    },
    getactiveListData(){
        return fetch(`https://swapi.co/api/${this.activeList}/`).then(response => response.json())
                                                              .then(data => this.activeListData = data.results)
                                                              .catch(error => console.error('error', error));
    }
  },
  filters: {
    capitalize: (v) => {
      return _.capitalize(v);
    }
  },
  components: {
    ListTable
  }
};
</script>

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
