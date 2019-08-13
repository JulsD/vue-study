// VuexSample.vue

<template>
    <div>
        <h2>{{ title }}</h2>
        <i>{{ date }}</i>
        <div>{{ count }}</div>
        <button @click="$store.commit('increment')">Increment</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
            subject: 'Vuex',
            type: 'Sample'
        }
    },
    computed: {
        title () {
            return `${this.subject} ${this.type}`
        },
        ...mapState([
        'count',
        'date'
    ])}
};
</script>