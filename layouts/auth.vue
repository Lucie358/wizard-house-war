<template>
  <v-app>
    <ParticlesJs>
      <nuxt />
    </ParticlesJs>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AuthLayout',
  data () {
    return {

    }
  }

})
</script>
<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }
</style>
