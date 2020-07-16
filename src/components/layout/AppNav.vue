<template>
    <v-navigation-drawer
      persistent
      :mini-variant="isMiniNav"
      :clipped="isClipped"
      v-model="showNav"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    data: () => ({
      showNav: false,
    }),
    computed: {
      ...mapGetters([
        'isClipped',
        'isNavVisible',
        'isMiniNav',
        'navItems'
      ])
    },
    watch: {
      isNavVisible(val) {
        if (val) {
          this.showNav = val;
        }
      }
    }
  }
</script>
