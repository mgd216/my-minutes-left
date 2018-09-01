<template>
    <v-card height="100%">
        <v-card-text class="ma3">
            <h3>My Profile</h3>
            <v-layout row wrap>
                <v-flex xs12 md6>
                <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    v-model="menu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                >
                    <v-text-field
                    slot="activator"
                    v-model="birthDate"
                    label="Enter Birthdate"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker 
                        ref="picker"
                        v-model="birthDate" 
                        no-title 
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        scrollable
                        @change="saveBirthdate"
                        >
                    </v-date-picker>
                </v-menu>
                </v-flex>
                <v-flex xs12 md6 class="text-center">
                    <v-container v-if="birthDate" align-center>
                    <p>You are {{minutesOld}} minutes old.</p>
                    </v-container>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    You should live 80 years.
                </v-flex>
                <v-flex xs12 md6>
                    <p>You have {{minutesLeft}} minutes left.</p>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
import numeral from 'numeral';

export default {
    name: "ProfileForm",
    data: () => ({
        birthDate: null,
        menu: false,
        modal: false,
        menu2: false,
        minutesDiff: 0
    }),
    computed: {
        minutesOld() {
            const milliDiff = this.$moment().diff(this.$moment(this.birthDate));
            this.minutesDiff = this.$moment.duration(milliDiff).asMinutes();
            return numeral(this.minutesDiff).format("0,0");
        },
        minutesLeft() {
            const endDate = this.$moment(this.birthDate).add(80, 'years');
            const totalMinutes = 80 * 525600;
            return numeral(totalMinutes - this.minutesDiff).format("0,0");
        }
    },
    watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      saveBirthdate (date) {
        this.$refs.menu.save(date)
      }
    }
};
</script>

<style>
</style>

