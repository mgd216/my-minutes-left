<template>
    <div class="min-left-container">
        <doughnut-chart chart-id="min-left-chart" :chart-data="datacollection" :options="chartOptions"></doughnut-chart>
        <div class="min-left-label">
            <div class="min-label">Minutes Left:<br>{{minutesLeft | numeral('0,0')}}</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import DoughnutChart from '@/components/charts/DoughnutChart.js'

    export default {
        name: 'MinLeftDoughnutChart',
        components: {
            DoughnutChart
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

    .min-left-label {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        font-size: 2em;
    }

    .min-label {
        top: 45%;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        position: absolute;
    }

    #min-left-chart {
        display: inline !important;
    }
</style>
