<template>
    <div>
        <gauge-chart :value="minutesLeft"></gauge-chart>
        <p class="title">You only have {{ minutesLeft | numeral(0,0)}} minutes left, you better go do something cool!</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GaugeChart from '@/components/charts/GaugeChart.vue'

    export default {
        name: 'MinLeftProgressChart',
        components: {
            GaugeChart
        },
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
