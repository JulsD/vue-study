// App.vue

<template>
  <main>
    <h1>{{ title }}</h1>
    <lists-nav />
  </main>
</template>
<script>
import ListsNav from "./components/ListsNav.vue";

export default {
  data: () => {
    return {
      title: "Hello, you are on Star Wars List generator!"
    };
  },
  components: {
    ListsNav
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
