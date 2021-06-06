<template>
  <v-form
    ref="form"
  >
    <v-text-field
      v-model="name"
      label="Nom de la partie"
      required
    />

    <v-textarea
      v-model="description"
      label="Description"
      required
    />
    <v-btn
      color="yellow darken-3"
      class="mr-4"
      @click="validate"
    >
      Créer
    </v-btn>

    <v-btn
      color="red"
      @click="$emit('close')"
    >
      Annuler
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CreateGame',
  data: () => ({
    name: '',
    description: ''

  }),
  methods: {
    validate () {
      const data = {
        name: this.name,
        description: this.description
      }
      this.$emit('create', data)
    }
  }

})

</script>
