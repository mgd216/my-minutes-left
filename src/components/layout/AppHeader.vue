<template>
    <v-toolbar app :clipped-left="isClipped">
      <v-toolbar-side-icon @click="showNav"></v-toolbar-side-icon>
      <v-btn icon @click="toggleMiniNav">
        <v-icon v-html="isMiniNav ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'AppHeader',
        computed: {
            ...mapGetters([
                'isClipped',
                'isMiniNav',
                'title'
            ])
        },
        methods: {
            ...mapActions([
                'showNav',
                'showMiniNav',
                'hideMiniNav'
            ]),
            toggleMiniNav() {
                this.isMiniNav ? this.hideMiniNav() : this.showMiniNav()
            }
        }
    }
</script>
