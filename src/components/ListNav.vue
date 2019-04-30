// ListNames.vue

<template>
  <main>
    <h2>{{ description }}</h2>
    <ul>
      <li
        v-for="(tableLink, tableName) of tablesList"
        :key="tableName"
        v-bind:class="{ active: activeList == tableName }"
      >
        <a v-href="tableLink" v-on:click="updateActiveList(tableName)">
            {{ tableName | capitalize }}
        </a>
      </li>
    </ul>
    <article>
        <transition name="fade" :duration="{ enter: 800, leave: 500 }" mode="out-in">
            <section :key="`${activeList}List`">{{activeList | capitalize}}</section>
        </transition>
    </article>
  </main>
</template>

<script>
import _ from 'lodash';

export default {
  data: () => {
    return {
      description: "Chose the list:",
      activeList: '',
      tablesList: null
    };
  },
  created: function () {
      let vm = this;
      fetch("https://swapi.co/api/")
        .then(response => response.json())
        .then(data => {
            vm.tablesList = data
            vm.activeList = Object.keys(vm.tablesList)[0]
            })
        .catch(error => console.error('error', error));
  },
  methods: {
    updateActiveList(listName) {
      this.activeList = listName;
    }
  },
  filters: {
    capitalize: (v) => {
      return _.capitalize(v);
    }
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
