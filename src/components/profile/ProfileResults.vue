<template>
    <div>
            <v-toolbar color="blue" dark>
      <v-toolbar-title>My Profile Results</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
        <v-card-text>
            <div v-if="isProfileComplete">
            <v-layout row wrap>
                <v-flex xs12>
                    <p>As a biological {{ gender | lowercase | capitalize}},
                    you should live <b>{{estimatedMinutes | numeral('0,0')}}</b>
                    minutes ({{estimatedAge}} years).</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <p>You are currently <b>{{minutesOld | numeral('0,0')}}</b> minutes old.</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <p>You have <b>{{minutesLeft | numeral('0,0')}}</b> minutes left.</p>
                </v-flex>
            </v-layout>
            </div>
            <div v-else class="ma-5 text-xs-center">
                <h3>Please complete your profile.</h3>
            </div>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ProfileResults',
        computed: {
            ...mapGetters([
                'estimatedAge',
                'estimatedMinutes',
                'gender',
                'isProfileComplete',
                'minutesLeft',
                'minutesOld'
            ])
        }
    }
</script>

<style>
</style>
