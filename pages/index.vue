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
    <v-speed-dial
      v-model="fab"
      bottom
      right
      absolute
      scale
    >
      <template #activator>
        <v-avatar
          v-model="fab"
          :class="!fab ? 'hvr-bob' : ''"
          dark
          fab
          size="60"
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <img
            v-else
            src="../assets/images/icons/pot.svg"
            alt="Baguette magique"
          >
        </v-avatar>
      </template>
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-avatar
            dark
            fab
            size="50"
            class="mt-4"
            v-bind="attrs"
            v-on="on"
            @click="logout()"
          >
            <img
              src="../assets/images/icons/potion.svg"
              alt="Deconnexion"
            >
          </v-avatar>
        </template>
        <span style="font-family:'Roboto' !important;">Deconnexion</span>
      </v-tooltip>
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-avatar
            dark
            fab
            size="50"
            v-bind="attrs"
            v-on="on"
            @click.stop="dialog = true"
          >
            <img
              src="../assets/images/icons/book.svg"
              alt="Creer une partie"
            >
          </v-avatar>
        </template>
        <span style="font-family:'Roboto' !important;">Créer une partie</span>
      </v-tooltip>
    </v-speed-dial>
    <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <Create-game @close="dialog=false" @create="submit" />
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Game } from 'interfaces/game'
import CreateGame from '~/components/CreateGame.vue'

export default Vue.extend({
  name: 'Index',
  components: { CreateGame },
  layout: 'auth',
  middleware: ['auth'],
  data () {
    return {
      dialog: false,
      email: '',
      pwd: '',
      showPwd: false,
      games: [] as Game[],
      loading: false,
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },
  // Recuperer directement toute la game avec anneees etc...
  mounted () {
    this.getGames()
  },

  methods: {
    logout () {
      this.$fire.auth.signOut().then(() => {
        this.$router.push('/login')
      }).catch((error) => {
        console.error(error)
      })
    },
    async submit (data: any) {
      const res = await this.$fire.firestore.collection('games').add({
        name: data.name,
        description: data.description,
        years: {
          year1: {
            name: 'Année 1',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year2: {
            name: 'Année 2',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year3: {
            name: 'Année 3',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year4: {
            name: 'Année 4',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year5: {
            name: 'Année 5',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year6: {
            name: 'Année 6',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          },
          year7: {
            name: 'Année 7',
            gryffondor: 0,
            serpentard: 0,
            poufsouffle: 0,
            serdaigle: 0
          }
        }
      })
      this.dialog = false
      this.getGames()
    },
    async selectGame (id:number) {
      const game = this.games.find((game) => {
        return game.id === id
      })
      if (!game) { return }
      await this.$store.commit('SET_GAME', game as Game)
      this.$router.push({ path: 'games', query: { game: game.id } })
    },
    async getGames () {
      const gamesSnap = await this.$fire.firestore.collection('games').get()
      const games = await gamesSnap.docs.map(g => ({ ...g.data(), id: g.id }))
      this.games = games as Game[]
    }
  }

})
</script>

<style></style>
