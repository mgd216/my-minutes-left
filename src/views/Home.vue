<template>
   <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 justify-space-between>
        <v-layout column>
          <v-flex>
            <ProfileForm />
          </v-flex>
          <v-flex>
            <ProfileResults />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 justify-space-between>
        <MinLeftCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MinLeftCard from '@/components/visualization/MinLeftCard.vue'
  import ProfileForm from '@/components/profile/ProfileForm.vue'
  import ProfileResults from '@/components/profile/ProfileResults.vue'

  export default {
    name: 'Home',
    components: {
      MinLeftCard,
      ProfileForm,
      ProfileResults
    }
  }
</script>

<style scoped>
</style>
