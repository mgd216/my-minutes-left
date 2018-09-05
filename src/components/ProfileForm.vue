<template>
    <v-card class="ma3">
        <v-card-text>
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
                    clearable
                    outline
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
                    <v-radio-group outline v-model="gender" @change="saveGender()" row>
                      <v-radio label="Male" value="MALE"></v-radio>
                      <v-radio label="Female" value="FEMALE"></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ProfileForm',
        data: () => ({
            birthDate: null,
            gender: 'MALE',
            menu: false,
            modal: false,
            menu2: false,
        }),
        watch: {
            menu(val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'));
            },
            birthDate(date) {
                this.setBirthDate(date);
            },
        },
        methods: {
            ...mapActions(['setBirthDate', 'setGender']),
            saveBirthdate(date) {
                this.$refs.menu.save(date);
            },
            saveGender(gender) {
                this.setGender(this.gender);
            },
        },
    };
</script>

<style>
</style>
