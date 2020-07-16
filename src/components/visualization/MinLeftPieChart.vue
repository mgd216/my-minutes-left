<template>
    <div class="min-left-container">
        <pie-chart chart-id="min-left-chart" :chart-data="datacollection" :options="chartOptions"></pie-chart>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import PieChart from '@/components/charts/PieChart.js'

    export default {
        name: 'MinLeftPieChart',
        components: {
            PieChart
        },
        data() {
            return {
                datacollection: null,
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: true,
                    pieceLabel: {
                        mode: 'percentage',
                        precision: 0
                    }
                }
            }
        },
        mounted() {
            this.fillData()
        },
        computed: {
            ...mapGetters([
                'minutesLeft',
                'minutesOld'
            ])
        },
        watch: {
            minutesLeft(val) {
                this.fillData()
            }
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: ['Left', 'Gone'],
                    datasets: [{
                        backgroundColor: [
                            '#41B883',
                            '#DD1B16'
                        ],
                        data: [this.minutesLeft, this.minutesOld]
                    }]
                }
            },
        }
    }
</script>

<style scoped>
    .min-left-container {
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
    }

    #min-left-chart {
        display: inline !important;
    }
</style>
