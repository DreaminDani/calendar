<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Ready to see your IP?</v-card-title>
        <v-card-text>
          <p>Your Ip: {{ ip }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" flat nuxt @click="icanhazip()">Get IP</v-btn>
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
      ip: null
    }
  },
  methods: {
    async icanhazip() {
      try {
        const res = await this.$axios.$get('/.netlify/functions/icanhazip')
        this.ip = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.ip = '—'
      }
    }
  }
}
</script>
