<template>
  <div class="d-flex justify-center hourglasses">
    <div>
      <Hourglass :points="gryffondorPoints" house="gryffondor" color="#890202" @addPoint="addPoint" @removePoint="removePoint" />
    </div>
    <div>
      <Hourglass :points="poufsoufflePoints" house="poufsouffle" color="#ECB938" @addPoint="addPoint" @removePoint="removePoint" />
    </div>
    <div>
      <Hourglass :points="serdaiglePoints" house="serdaigle" color="#001C89" @addPoint="addPoint" @removePoint="removePoint" />
    </div>
    <div>
      <Hourglass :points="serpentardPoints" house="serpentard" color="#1B6429" @addPoint="addPoint" @removePoint="removePoint" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hourglass from '~/components/Hourglass.vue'

export default Vue.extend({
  name: 'Games',
  components: { Hourglass },
  layout: 'app',

  data () {
    return {
      gryffondorPoints: this.$store.getters.selectedGameYearsSorted[this.$store.state.selectedYear].gryffondor,
      serdaiglePoints: this.$store.getters.selectedGameYearsSorted[this.$store.state.selectedYear].serdaigle,
      poufsoufflePoints: this.$store.getters.selectedGameYearsSorted[this.$store.state.selectedYear].poufsouffle,
      serpentardPoints: this.$store.getters.selectedGameYearsSorted[this.$store.state.selectedYear].serpentard
    }
  },

  methods: {
    async addPoint (house: string, point: number) {
      const selectedYear = this.$store.state.selectedYear
      let currentPoint = 0
      if (house === 'gryffondor') {
        currentPoint = this.gryffondorPoints
      } else if (house === 'serpentard') {
        currentPoint = this.serpentardPoints
      } else if (house === 'serdaigle') {
        currentPoint = this.serdaiglePoints
      } else if (house === 'poufsouffle') {
        currentPoint = this.poufsoufflePoints
      }
      const newPoints = currentPoint + point
      await this.$fire.firestore.collection('games').doc(this.$store.state.game.id).update({
        ['years.year' + (selectedYear + 1) + '.' + [house]]: newPoints
      }).then(() => {
        if (house === 'gryffondor') {
          this.gryffondorPoints = newPoints
        } else if (house === 'serpentard') {
          this.serpentardPoints = newPoints
        } else if (house === 'serdaigle') {
          this.serdaiglePoints = newPoints
        } else if (house === 'poufsouffle') {
          this.poufsoufflePoints = newPoints
        }
      })
    },
    async removePoint (house: string, point: number) {
      const selectedYear = this.$store.state.selectedYear
      let currentPoint = 0
      if (house === 'gryffondor') {
        currentPoint = this.gryffondorPoints
      } else if (house === 'serpentard') {
        currentPoint = this.serpentardPoints
      } else if (house === 'serdaigle') {
        currentPoint = this.serdaiglePoints
      } else if (house === 'poufsouffle') {
        currentPoint = this.poufsoufflePoints
      }
      const newPoints = currentPoint - point

      await this.$fire.firestore.collection('games').doc(this.$store.state.game.id).update({
        ['years.year' + (selectedYear + 1) + '.' + [house]]: newPoints

      }).then(() => {
        if (house === 'gryffondor') {
          this.gryffondorPoints = newPoints
        } else if (house === 'serpentard') {
          this.serpentardPoints = newPoints
        } else if (house === 'serdaigle') {
          this.serdaiglePoints = newPoints
        } else if (house === 'poufsouffle') {
          this.poufsoufflePoints = newPoints
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }

</style>
