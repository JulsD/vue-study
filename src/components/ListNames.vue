// ListNames.vue

<template>
    <section>
        <h2>{{description}}</h2>
        <ul>
            <li v-for="list of listNames" :key="list.title">
                <button>{{list.title}}</button>
            </li>
        </ul>
    </section>
</template>
<script>
   export default {
      data: () => {
         return {
            description: 'Chose the list:',
            listNames: [
                {
                    title: 'Films' 
                },
                {
                    title: 'People'
                },
                {
                    title: 'Planets'
                },
                {
                    title: 'Species'
                },
                {
                    title: 'Starships'
                },
                {
                    title: 'Vehicles'
                }
            ]
         }
      }
   }
</script>

<style scoped>
   h1 {
      color: purple;
   }
</style>