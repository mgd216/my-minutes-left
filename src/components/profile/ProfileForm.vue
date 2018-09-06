<template>
  <div>
    <v-toolbar color="blue" dark>
      <v-toolbar-title>My Profile</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
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
                    v-model="birthdate"
                    label="Enter Birthdate"
                    prepend-icon="event"
                    readonly
                    clearable
                    ></v-text-field>
                    <v-date-picker
                        ref="picker"
                        v-model="birthdate"
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
                  <v-radio-group outline v-model="gender" @change="saveGender()" row>
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
  import { mapActions } from 'vuex'

  export default {
    name: 'ProfileForm',
    data: () => ({
      birthdate: null,
      gender: 'MALE',
      menu: false,
      modal: false,
      menu2: false
    }),
    watch: {
      menu(val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
      birthdate(date) {
        this.setBirthdate(date)
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
      },
      saveGender(gender) {
        this.setGender(this.gender)
      }
    },
    created() {
      this.fetchProfile()
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .gender-title {
    color: #888;
    font-size: 12px;
  }
</style>
