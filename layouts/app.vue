<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AppLayout',
  middleware: ['auth']
})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }
</style>
