// ListNames.vue

<template>
    <section>
        <h2>{{description}}</h2>
        <ul>
            <li v-for="list of listNames" :key="list.title" v-bind:class="{ active: activeList == list.title }">
                <a v-href="list.title" v-on:click="updateActiveList(list.title)">{{list.title}}</a>
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
            ],
            activeList: 'Films'
         }
      },
      methods: {
         updateActiveList(listName) {
             this.activeList = listName;
         }
      }
   }
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
</style>