<template>
    <div>
        <v-card>
            <v-card-title class="blue white--text">
                <span class="headline">Minutes Left</span>
                <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn
                  slot="activator"
                  dark
                  icon
                >
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="loadViz('MinLeftDoughnutChart')">
                <v-list-tile-title>Doughnut Chart</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="loadViz('MinLeftGaugeChart')">
                <v-list-tile-title>Gauge Chart</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="loadViz('MinLeftPieChart')">
                <v-list-tile-title>Pie Chart</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="loadViz('MinLeftProgress')">
                <v-list-tile-title>Progress Bar</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
            <v-card-text>
                <div v-if="isProfileComplete" class="min-left-container">
                    <component :is="minLeftVizComponent"></component>
                </div>
                <div v-else class="ma-5 text-xs-center">
                    <h3>Please complete your profile.</h3>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import MinLeftDoughnutChart from '@/components/visualization/MinLeftDoughnutChart.vue'
    import MinLeftGaugeChart from '@/components/visualization/MinLeftGaugeChart.vue'
    import MinLeftPieChart from '@/components/visualization/MinLeftPieChart.vue'
    import MinLeftProgress from '@/components/visualization/MinLeftProgress.vue'

    export default {
        name: 'MinLeftCard',
        components: {
            MinLeftDoughnutChart,
            MinLeftGaugeChart,
            MinLeftPieChart,
            MinLeftProgress
        },
        computed: {
            ...mapGetters([
                'isProfileComplete',
                'minLeftVizComponent'
            ])
        },
        methods: {
            ...mapActions([
                'loadMinLeftVizComponent'
            ]),
            loadViz(viz) {
                this.loadMinLeftVizComponent(viz);
            }
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
