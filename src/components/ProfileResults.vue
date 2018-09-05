<template>
    <v-card class="ma3">
        <v-card-text>
            <h3>My Profile Results</h3>
            <div v-if="isProfileComplete">
            <v-layout row wrap>
                <v-flex xs12>
                    <p>As a biological {{ gender | lowercase | capitalize}}, you should live {{estimatedMinutes | numeral('0,0')}} minutes ({{estimatedAge}} years).</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <p>You are currently {{minutesOld | numeral('0,0')}} minutes old.</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <p>You have {{minutesLeft | numeral('0,0')}} minutes left.</p>
                </v-flex>
            </v-layout>
            </div>
            <div v-else class="ma10">
                <h3>Please complete your profile.</h3>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ProfileResults',
        computed: {
            ...mapGetters([
                'estimatedAge',
                'estimatedMinutes',
                'gender',
                'isProfileComplete',
                'minutesLeft',
                'minutesOld',
            ]),
        },
    };
</script>

<style>
</style>
