<template>
  <div class="mt-9">
    <h1 class="text-center">
      Choisis une partie
    </h1>
    <v-row class="mx-5">
      <v-col
        v-for="game in games"
        :key="game.id"
        cols="12"
        sm="3"
      >
        <v-card tile>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ game.name }}
              </v-list-item-title>
              <p style="font-family:'Roboto' !important; font-size:0.7rem !important;" class="mt-2">
                {{ game.description }}
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              text
              small
              @click="selectGame(game.id)"
            >
              Alohomora
            </v-btn>
            <v-btn
              color="red"
              text
              small
            >
              Destructum
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Game } from 'interfaces/game'

export default Vue.extend({
  name: 'Index',

  layout: 'auth',
  data () {
    return {
      email: '',
      pwd: '',
      showPwd: false,
      games: [] as Game[],
      loading: false
    }
  },
  // Recuperer directement toute la game avec anneees etc...
  mounted () {
    this.getGames()
  },

  methods: {
    async selectGame (id:number) {
      const game = this.games.find((game) => {
        return game.id === id
      })
      if (!game) { return }
      await this.$store.commit('SET_GAME', game as Game)
      this.$router.push({ path: 'games', query: { game: game.id } })
    },
    async getGames () {
      const gamesSnap = await this.$fire.firestore.collection('game').get()
      const games = await gamesSnap.docs.map(g => ({ ...g.data(), id: g.id }))
      this.games = games as Game[]
    }
  }

})
</script>

<style></style>
