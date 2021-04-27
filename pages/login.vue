<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-content dark style="background:url(https://images.unsplash.com/photo-1539814858141-928517f6afd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);background-size:cover">
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              xs12
              sm8
              md4
            >
              <v-card class="elevation-12" dark>
                <v-toolbar
                  color="red darken-3"
                  dark
                  flat
                >
                  <v-toolbar-title>Connectez vous à votre compte</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      label="Adresse e-mail"
                      name="email"
                      prepend-icon="mdi-at"
                      color="red"
                      required
                      type="email"
                      counter
                    />

                    <v-text-field
                      id="password"
                      v-model="pwd"
                      label="Mot de passe"
                      name="password"
                      prepend-icon="mdi-lock"
                      color="red"
                      required
                      :type="showPwd ? 'text' : 'password'"
                      :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPwd = !showPwd"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="red darken-3" @click="submit">
                    Connexion
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  name: 'Login',
  layout: 'auth',
  data () {
    return {
      email: '',
      pwd: '',
      showPwd: false
    }
  },
  methods: {
    async submit () {
      await this.$fire.auth.signInWithEmailAndPassword(this.email, this.pwd)
      this.$router.push('/')
    }
  }

}
</script>

<style></style>
