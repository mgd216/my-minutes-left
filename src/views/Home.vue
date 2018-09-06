<template>
   <v-container grid-list-md fluid fill-height>
    <v-layout row wrap>
      <v-flex xs6 fill-height justify-space-between>
        <MinLeftDoughnutChart />
      </v-flex>
      <v-flex xs6 fill-height justify-space-between>
        <v-layout column>
          <v-flex>
            <ProfileForm />
          </v-flex>
          <v-flex>
            <ProfileResults />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MinLeftDoughnutChart from '@/components/visualization/MinLeftDoughnutChart.vue'
  import ProfileForm from '@/components/profile/ProfileForm.vue'
  import ProfileResults from '@/components/profile/ProfileResults.vue'

  export default {
    name: 'Home',
    components: {
      MinLeftDoughnutChart,
      ProfileForm,
      ProfileResults
    }
  }
</script>

<style scoped>
</style>
