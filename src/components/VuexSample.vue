// VuexSample.vue

<template>
    <div>
        <i>{{ date }}</i>
        <div>{{ count }}</div>
        <button @click="$store.commit('increment')">Increment</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState([
        'count',
        'date'
    ])
};
</script>