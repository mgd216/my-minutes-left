<template>
   <v-container grid-list-md text-xs-center fluid fill-height>
    <v-layout row wrap>
      <v-flex xs6 fill-height>
        <MinutesLeft />
      </v-flex>
      <v-flex xs6 fill-height>
        <ProfileForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MinutesLeft from '@/components/MinutesLeft'
import ProfileForm from '@/components/ProfileForm'

export default {
  name: 'Home',
  components: {
    MinutesLeft,
    ProfileForm
  }
}
</script>

<style scoped>

</style>
