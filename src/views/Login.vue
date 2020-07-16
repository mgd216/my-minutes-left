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
        <v-container style="position: relative;" class="text-xs-center">
          <v-card flat class="pa-3">
            <v-card-title primary-title>
              <h4>Login with Email and Password:</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="mail" v-model="email" name="Email" label="Email"></v-text-field>
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
                <svg aria-hidden="true" class="svg-icon native iconGoogle" width="18" height="18" viewBox="0 0 18 18"><g><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"/><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"/><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"/><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" fill="#EA4335"/></g></svg>
                &nbsp;&nbsp;&nbsp;Google
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
