// App.component.vue

<template>
   <h1>{{message}}</h1>
</template>
<script>
   export default {
      data: () => {
         return {
            message: 'Hello from the Vue App!'
         }
      }
   }
</script>

<style scoped>
   h1 {
      color: purple;
   }
</style>