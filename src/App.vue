// App.vue

<template>
  <main>
    <h1>{{ title }}</h1>
    <router-link to="/lists">Go to Lists</router-link>
    <router-link to="/bar">Go to Bar</router-link>
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
</style>
