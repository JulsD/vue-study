// App.vue

<template>
  <main>
    <h1>{{ title }}</h1>
    <router-link to="/lists" class="nav-link">Go to Lists</router-link>
    <router-link to="/bar" class="nav-link">Go to Bar</router-link>
    <router-link to="/vuex" class="nav-link">Check the Vuex power</router-link>
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      title: "Hello, you are on Star Wars List generator!"
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}

.nav-link {
  display: inline-block;
  padding: 10px;
  color: darkgreen;
  background-color: lightgoldenrodyellow;
}
</style>
