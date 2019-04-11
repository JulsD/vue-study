// App.vue

<template>
   <main>
      <h1>{{title}}</h1>
      <ListNames />
   </main>
</template>
<script>
   import ListNames from './components/ListNames.vue'
   export default {
      data: () => {
         return {
            title: 'Hello, you are on Star Wars List generator!'
         }
      },
      components: {
         ListNames
      }
   }
</script>

<style scoped>
   h1 {
      color: purple;
   }
</style>