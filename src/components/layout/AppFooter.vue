<template>
    <v-footer :fixed="isFixed" app>
      <span>&copy; 2017</span>
    </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppHeader',
    computed: {
      ...mapGetters([
        'isFixed'
      ])
    }
  }
</script>
