<template>
  <v-app v-if="$store.state.game">
    <ParticlesJs>
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
            >
              <img
                src="../assets/images/icons/crystal-ball.svg"
                alt="Changer de partie"
              >
            </v-avatar>
          </template>
          <span style="font-family:'Roboto' !important;">Changer de partie</span>
        </v-tooltip>
      </v-speed-dial>
    </ParticlesJs>
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
  }
})
</script>

<style scoped lang="scss">
  #app {
    min-height: 100vh;
  }
</style>
