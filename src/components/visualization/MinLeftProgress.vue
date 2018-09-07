<template>
    <div>
        <v-progress-linear 
        v-model="percentLeft"
        background-color="success"
      color="error"
        height="75"
        >
        </v-progress-linear>
        <p class="title">You only have {{ minutesLeft | numeral(0,0)}} minutes left, you better go do something cool!</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'MinLeftProgressChart',
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'estimatedMinutes',
                'minutesLeft',
                'minutesOld'
            ]),
            percentLeft() {
                return ((this.minutesOld / this.estimatedMinutes) * 100)
            }
        },
    }
</script>

<style scoped>
</style>
