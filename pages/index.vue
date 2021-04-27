<template>
  <div>
    <Hourglass color="#890202" />
    <Hourglass color="#ECB938" />
    <Hourglass color="#001C89" />
    <Hourglass color="#1B6429" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hourglass from '~/components/Hourglass.vue'

export default Vue.extend({
  name: 'Index',
  components: { Hourglass },
  layout: 'app'

})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }

</style>
