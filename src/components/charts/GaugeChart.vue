<template>
    <canvas id="radial-gauge"></canvas>
</template>

<script>
    import { RadialGauge } from 'canvas-gauges'

    export default {
        name: 'GaugeChart',
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                chart: null
            }
        },
        watch: {
            value(val) {
                this.chart.value = (val / 1000000)
            }
        },
        mounted() {

            var options = {
                renderTo: 'radial-gauge',
                width: 400,
                height: 400,
                units: 'Minutes Left',
                title: false,
                value: this.value / 1000000,
                minValue: 0,
                maxValue: 45,
                majorTicks: [
                    '0', '5M', '10M', '15M', '20M', '25M', '30M', '35M', '40M', '45M'
                ],
                minorTicks: 2,
                strokeTicks: false,
                highlights: [
                    { from: 0, to: 10, color: 'rgba(255,30,0,.25)' },
                    { from: 10, to: 20, color: 'rgba(255,255,0,.15)' },
                    { from: 20, to: 45, color: 'rgba(0,255,0,.15)' }
                ],
                colorPlate: '#222',
                colorMajorTicks: '#f5f5f5',
                colorMinorTicks: '#ddd',
                colorTitle: '#fff',
                colorUnits: '#ccc',
                colorNumbers: '#eee',
                colorNeedle: 'rgba(240, 128, 128, 1)',
                colorNeedleEnd: 'rgba(255, 160, 122, .9)',
                valueBox: true,
                animationRule: 'bounce',
                animationDuration: 500
            }

            this.chart = new RadialGauge(options).draw()

        },
        beforeDestroy: function() {
            this.chart.destroy()
        },
    }
</script>
