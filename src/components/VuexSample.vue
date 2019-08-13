// VuexSample.vue

<template>
    <div>
        <div>{{ count }}</div>
        <button @click="$store.commit('increment')">Increment</button>
    </div>
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
};
</script>