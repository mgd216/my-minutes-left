<template>
    <v-container>
    <v-layout row class="text-xs-center" style="max-width: 600px;">
      <v-flex md4>
        <v-card height="500px">
            <v-img src="./img/Hourglass_400.png" height="300" contain></v-img>
            <p class="display-2">My Minutes Left</p>
        </v-card>
      </v-flex>
      <v-flex md8 class="grey lighten-2">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" v-model="email" name="Email" label="Email"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="password" name="Password" label="Password" type="password"></v-text-field>
            </v-form>
            <v-container>
            <v-layout align-center justify-space-around row>
              <v-btn primary large @click="login">Login</v-btn>
              <v-btn primary large @click="openConfirmDialog">Signup</v-btn>
            </v-layout>
            <v-layout align-center justify-center column class="mt-10">
              <p>or sign in with</p>
              <v-btn primary large @click="loginGoogle">
                <v-icon left>fa-google-plus-g</v-icon>
                Google
              </v-btn>
            </v-layout>
            </v-container>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row class="text-xs-center" style="max-width: 600px;">
      <v-alert v-model="alert" type="error" dismissible>
        {{errMsg}}
      </v-alert>
    </v-layout>
    <v-dialog v-model="confirmDialog" max-width="500px">
        <v-card>
          <v-card-title class="blue white--text">
            <span class="headline">New User Signup</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" v-model="email" name="Email" label="Email"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password" name="Password" label="Password" type="password"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="confirmPassword" name="Confirm Password" label="Password" type="password"></v-text-field>
            </v-form>
            <v-alert v-model="dialogAlert" type="error" dismissible>
              {{errMsg}}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" flat @click="closeConfirmDialog">Cancel</v-btn>
            <v-btn color="primary" flat @click="signup">Signup</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    data: () => ({
      alert: false,
      dialogAlert: false,
      confirmDialog: false,
      confirmPassword: null,
      errMsg: null,
      password: null,
      email: null,
    }),
    methods: {
      ...mapActions([
        'alertError',
        'loginEmailPassword',
        'loginGoogle',
        'signupEmailPassword'
      ]),
      closeConfirmDialog() {
        this.confirmDialog = false
        this.dialogAlert = false
      },
      openConfirmDialog() {
        if (this.email && this.password) {
          this.confirmDialog = true
          this.alert = false
        }
        else {
          this.alert = true;
          this.errMsg = "You must enter both an Email and Password to Signup!"
        }
      },
      login() {
        if (this.email && this.password) {
          let user = {
            email: this.email,
            password: this.password
          }
          this.loginEmailPassword(user)
            .catch(() => {
              this.alert = true;
              this.errMsg = `There is no user with email ${this.email}, please signup.`
            });
        }
        else {
          this.alert = true;
          this.errMsg = "You must enter both an Email and Password!"
        }
      },
      signup() {
        if (this.email && this.password) {
          if (this.password === this.confirmPassword) {
            let user = {
              email: this.email,
              password: this.password
            }
            this.signupEmailPassword(user)
              .catch((err) => {
                this.dialogAlert = true;
                this.errMsg = err.message
              });
          }
          else {
            this.dialogAlert = true;
            this.errMsg = "Your password and confirm password must be the same!"
          }
        }
        else {
          this.alert = true;
          this.errMsg = "You must enter both an Email and Password to Signup!"
        }
      },
    }
  }
</script>
