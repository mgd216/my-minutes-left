<template>
  <div>
    <v-card>
        <v-card-title class="blue white--text">
          <span class="headline">My Profile</span>
        </v-card-title>
        <v-card-text>
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
                    :value="birthdateFormatted"
                    label="Enter Birthdate"
                    prepend-icon="event"
                    readonly
                    clearable
                    @click:clear="checkClear"
                    ></v-text-field>
                    <v-date-picker
                        ref="picker"
                        :value="birthdate"
                        no-title
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        scrollable
                        @change="saveBirthdate"
                        >
                    </v-date-picker>
                </v-menu>
                </v-flex>
                <v-flex xs12 md6 class="pl-4">
                  <p class="gender-title">Select biological gender:</p>
                  <v-radio-group :value="gender" @change="saveGender($event)" row>
                    <v-radio label="Male" value="MALE"></v-radio>
                    <v-radio label="Female" value="FEMALE"></v-radio>
                  </v-radio-group>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import moment from 'moment'

    export default {
        name: 'ProfileForm',
        data: () => ({
            menu: false,
            modal: false,
            menu2: false
        }),
        computed: {
            ...mapGetters([
                'birthdate',
                'gender',
                'isProfileComplete'
            ]),
            birthdateFormatted() {
                return this.birthdate ? moment(this.birthdate).format('MM/DD/YYYY') : null;
            }
        },
        watch: {
            menu(val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },
        methods: {
            ...mapActions([
                'fetchProfile',
                'setBirthdate',
                'setGender'
            ]),
            saveBirthdate(date) {
                this.$refs.menu.save(date)
                this.setBirthdate(date)
            },
            saveGender(gender) {
                this.setGender(gender)
            },
            checkClear() {
                this.setBirthdate(null)
            }
        }
    }
</script>

<style scoped>
    .gender-title {
        color: #888;
        font-size: 12px;
    }
</style>
