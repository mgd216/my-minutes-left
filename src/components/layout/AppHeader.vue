<template>
    <v-toolbar app :clipped-left="isClipped">
      <v-toolbar-side-icon @click="showNav"></v-toolbar-side-icon>
      <v-btn icon @click="toggleMiniNav">
        <v-icon v-html="isMiniNav ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="isLoggedIn">
        <v-menu offset-y>
        <v-avatar size="36px" slot="activator">
            <v-icon>face</v-icon>
        </v-avatar>
          <v-list>
            <v-list-tile @click="logout">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn small color="primary" to="/login">Login</v-btn>
      </div>
    </v-toolbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'AppHeader',
        computed: {
            ...mapGetters([
                'isClipped',
                'isLoggedIn',
                'isMiniNav',
                'title',
            ])
        },
        methods: {
            ...mapActions([
                'hideMiniNav',
                'logout',
                'showMiniNav',
                'showNav',
            ]),
            toggleMiniNav() {
                this.isMiniNav ? this.hideMiniNav() : this.showMiniNav()
            }
        }
    }
</script>
