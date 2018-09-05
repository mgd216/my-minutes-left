<template>
   <v-container grid-list-md text-xs-center fluid fill-height>
    <v-layout row wrap>
      <v-flex xs6 fill-height>
        <MinutesLeft />
      </v-flex>
      <v-flex xs6 fill-height>
        <ProfileForm />
        <ProfileResults />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MinutesLeft from '@/components/MinutesLeft.vue';
import ProfileForm from '@/components/ProfileForm.vue';
import ProfileResults from '@/components/ProfileResults.vue';

export default {
  name: 'Home',
  components: {
    MinutesLeft,
    ProfileForm,
    ProfileResults,
  },
};
</script>

<style scoped>
</style>
