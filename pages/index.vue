<template>
  <div class="d-flex justify-center hourglasses">
    <div>
      <Hourglass :points="gryffondorPoints" color="#890202" />
    </div>
    <div>
      <Hourglass :points="poufsoufflePoints" color="#ECB938" />
    </div>
    <div>
      <Hourglass :points="serdaiglePoints" color="#001C89" />
    </div>
    <div>
      <Hourglass :points="serpentardPoints" color="#1B6429" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hourglass from '~/components/Hourglass.vue'

export default Vue.extend({
  name: 'Index',
  components: { Hourglass },
  layout: 'app',

  data () {
    return {
      gryffondor: this.$store.state.game.gryffondor
    }
  },
  computed: {
    gryffondorPoints () {
      const selectedYear = this.$store.state.selectedYear
      return this.$store.state.game.years[selectedYear].gryffondor
    },
    serdaiglePoints () {
      const selectedYear = this.$store.state.selectedYear
      return this.$store.state.game.years[selectedYear].serdaigle
    },
    serpentardPoints () {
      const selectedYear = this.$store.state.selectedYear
      return this.$store.state.game.years[selectedYear].serpentard
    },
    poufsoufflePoints () {
      const selectedYear = this.$store.state.selectedYear
      return this.$store.state.game.years[selectedYear].poufsouffle
    }
  }
})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }

</style>
