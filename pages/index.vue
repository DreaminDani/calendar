<style>
  .text-wrapper {
    margin: 0 24px;
  }
</style>

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Type your name to say hello</v-card-title>
        <v-text-field class="text-wrapper" v-model="name"></v-text-field>
        <v-card-text>
          <p>{{ hello }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" flat nuxt @click="helloworld()">SHOW ME THE MONEY</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      form: {},
      response: '—',
      error: null,
      hello: null,
      name: '',
    }
  },
  methods: {
    async helloworld() {
      try {
        const res = await this.$axios.$get(`/.netlify/functions/hello-world?name=${this.name}`)
        this.hello = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.hello = '—'
      }
    }
  }
}
</script>
