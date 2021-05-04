<template>
  <v-app v-if="$store.state.game">
    <div>
      <v-tabs
        v-model="selectedYear"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab
          v-for="year in $store.state.game.years"
          :key="year.name"
        >
          {{ year.name }}
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="selectedYear">
      <v-tab-item
        v-for="year in $store.state.game.years"
        :key="year.name"
      >
        <nuxt />
      </v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { orderBy } from 'lodash'

export default Vue.extend({
  name: 'AppLayout',
  middleware: ['auth'],
  data () {
    return {
    }
  },
  computed: {
    selectedYear: {
      get () {
        return this.$store.state.selectedYear
      },
      set (newValue: string) {
        this.$store.commit('SELECT_YEAR', newValue)
      }
    }
  },

  // Recuperer directement toute la gane avec anneees etc...
  mounted () {
    this.getGames()
  },
  methods: {
    async getGames () {
      const gamesSnap = await this.$fire.firestore.collection('game').get()
      const games = gamesSnap.docs.map(g => g.data()).map((game) => {
        console.log(game)
        game.years = orderBy(game.years, 'name')
        return game
      })
      this.$store.commit('SET_GAME', games[0])
    }
  }
})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }
//   .v-window {
//    min-height: 100vh;
//  }
</style>
