<template>
  <div id="hourglass" :style="{ '--sandColor': color }" class="ready">
    <div class="glass">
      <div class="sand top" :style="{height: (100 - getPercent)+'%'}" />
    </div>
    <div class="glass bottom">
      <div class="sand bottom" :style="{height: getPercent+'%'}" />
    </div>
    <p class="text-center">
      {{ points }}
    </p>
    <div class="text-center mt-2">
      <v-menu
        v-model="addInput"
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            :color="color"
            dark
            v-bind="attrs"
            v-on="on"
          >
            +
          </v-btn>
        </template>

        <v-text-field
          v-model.number="pointsToAdd"
          class="mt-4"
          clearable
          type="number"
          outlined
          label="Ajouter des points"
          autofocus
          hide-details="auto"
          @keydown.enter.exact.prevent="addPoints"
        />
      </v-menu>
      <v-menu
        v-model="removeInput"
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            :color="color"
            dark
            v-bind="attrs"
            v-on="on"
          >
            -
          </v-btn>
        </template>
        <v-text-field
          v-model.number="pointsToRemove"
          type="number"
          class="mt-4"
          clearable
          label="Enlever des points"
          outlined
          autofocus
          hide-details="auto"
          @keydown.enter.exact.prevent="removePoints"
        />
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hourglass',
  props: {
    color: { type: String, default: '' },
    points: { type: Number, default: 0 },
    house: { type: String, default: '' }

  },
  data: () => ({
    addInput: false,
    removeInput: false,
    maxPoints: 1500,
    pointsToAdd: null,
    pointsToRemove: null

  }),
  computed: {
    getPercent () : Number {
      return this.points / this.maxPoints * 100
    }
  },
  methods: {
    addPoints () {
      this.$emit('addPoint', this.house, this.pointsToAdd)
      this.addInput = false
      this.pointsToAdd = null
    },
    removePoints () {
      this.$emit('removePoint', this.house, this.pointsToRemove)
      this.removeInput = false
      this.pointsToRemove = null
    }
  }

})

</script>
<style scoped>

#hourglass{
  --glassColor:rgba(0,123,138, 0.2);
  --hourglassSize:9rem;
  display:inline-block;
  transition-property: transform;
  transition-duration: 700ms;
  transition-timing-function: ease;
}

.glass{
  z-index:1;
  position:relative;
  background-color:var(--glassColor);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  height:var(--hourglassSize);
  width:calc(var(--hourglassSize) * 1.5);
  bottom:-0.2em;
  overflow:hidden;
  border-top-left-radius:20% 100%;
  border-top-right-radius:20% 100%;
}

.top{
  z-index:2;
}

.glass.bottom{
  z-index:0;
  top:-0.2em;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  border-top-left-radius:0;
  border-top-right-radius:0;
  border-bottom-left-radius:20% 100%;
  border-bottom-right-radius:20% 100%;
}

.sand.top:after{
  position:absolute;
  content:"";
  width:100%;
  top:-20px;
  height:20px;
  border-bottom-left-radius:50% 70%;
  border-bottom-right-radius:50% 70%;
  background-color:transparent;
  box-shadow:0 10px 0 var(--sandColor);
  animation: kfSandTop 2000ms ease-in-out infinite;
}

.sand{
  position:absolute;
 background-color:var(--sandColor);
  min-width:100%;
  height:100%;
  bottom:0;
}

#hourglass.ready .sand{
  transition-property:height;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
}

.glass.bottom .sand{
  height:0;
  border-top-left-radius:50% 100%;
  border-top-right-radius:50% 100%;
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  transition-timing-function: ease-in;
  animation: kfSandBottom 3000ms ease infinite;
}

.glass.bottom:before{
  position:absolute;
  content:"";
  background-color:var(--sandColor);
  height:98%;
  width:3px;
  bottom:0;
  left:50%;
  transform:translate(-50%);
}

@keyframes kfSandStream{
  0% {height:0;transform:rotate(10deg)}
  10%{height:100%;top:0;transform:rotate(-15deg)}
  95%{height:100%;top:0;}
  100% {height:0;top:100%;}
}

@keyframes kfSand{
  0% {  border-top-left-radius:20% 20%;
  border-top-right-radius:20% 20%;}
  50% {  border-top-left-radius:50% 40%;
  border-top-right-radius:50% 40%;}
}

@keyframes kfSandTop{
  0% {  border-bottom-left-radius:50% 50%;
  border-bottom-right-radius:50% 50%;}
  50%{  border-bottom-left-radius:50% 80%;
  border-bottom-right-radius:50% 80%;}
  100%{  border-bottom-left-radius:50% 50%;
  border-bottom-right-radius:50% 50%;
  }
}

@keyframes kfSandBottom{
  0% {  border-top-left-radius:50% 100%;
  border-top-right-radius:50% 100%;}
  50%{  border-top-left-radius:100% 150%;
  border-top-right-radius:100% 150%;
  }
  100%{  border-top-left-radius:50% 100%;
  border-top-right-radius:50% 100%;
  }
}

</style>
