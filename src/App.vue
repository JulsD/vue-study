// App.vue

<template>
  <main>
    <h1>{{ title }}</h1>
    <ListNav />
  </main>
</template>
<script>
import ListNav from "./components/ListNav.vue";

export default {
  data: () => {
    return {
      title: "Hello, you are on Star Wars List generator!"
    };
  },
  components: {
    ListNav
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
