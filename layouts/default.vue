<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      elevate-on-scroll
      app
      prominent
      height="100%"
      color="#c65343"
      class="pa-0"
    >
      <v-container class='pa-0' style="height:inherit">
        <v-row class='pa-0' style='height: inherit' align="center" justify="center">
          <!-- Column for logo -->
          <v-col style="pa-0" :lg="2" :md="2" :sm="3" :xs="4">
            <nuxt-link to="/" class='pa-0' style='height: fit-content; width: fit-content'>
              <v-img src="logoquantum.svg" style='max-height: 13vh; height:90%; max-width: 70%' contain></v-img>
            </nuxt-link>
          </v-col>
          <v-spacer></v-spacer>
          <!-- Column for GETI button -->
          <v-col class="d-none d-sm-flex" style="pa-0" :lg="2" :md="2" :sm="2">
            <v-btn text id='geti-text' @click="$vuetify.goTo('#geti')">GETI</v-btn>
          </v-col>
          <!-- Column for About button -->
          <v-col class="d-none d-md-flex" style="pa-0" :lg="2" :md="2" :sm="2">
            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <template v-slot:activator="{ on }">
                    <v-btn text color="white" style="font-family:'Gotham Bold'; text-align:left; font-size: 1.1rem" v-on="on">ABOUT</v-btn>
                  </template>
                  <v-card>
                    <center>
                      <v-btn color=primary icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </center>
                    <about :slogan="get_text('slogan')"
                          :mission1="get_text('about1')"
                          :mission2="get_text('about2')"
                          :vision1="get_text('about3')"
                          :vision2="get_text('about4')"
                          :equipo="get_text('about5')">
                    </about>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-col>
          <v-col>
            <v-btn text id="geti-text"
              v-if = "$store.state.lang == 'es'"
              @click ="changeLang">
              en
            </v-btn>
            <v-btn text id="geti-text"
              v-else
              @click="changeLang">
              es
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container class='pa-0' fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import About from '~/components/about.vue'

export default {
  components: {
    About,
  },

  data () {
    return {
      es: {
        'menu1': 'GETI',
        'menu2': 'ACERCA DE',
        'slogan': 'Satisfacemos necesidades energéticas usando la ciencia.',
        'about1': 'MISIÓN',
        'about2': 'Utilizamos la ciencia para desarrollar tecnología de la más alta calidad, con el propósito de mejorar la calidad de vida de las personas, utilizando recursos sostenibles y culturalmente aceptables.',
        'about3': 'VISIÓN',
        'about4': 'Ser una empresa que contribuya a crear las condiciones necesarias para que todos los seres vivan dignamente y se desarrollen con libertad, a través de la ciencia y tecnología, bajo un esquema sostenible, justo y escalable.',
        'about5': 'El equipo'
      },
      en: {
        'menu1': 'GETI',
        'menu2': 'ABOUT',
        'slogan': 'We satisfy energy needs using science.',
        'about1': 'MISION',
        'about2': "We use science to develop technology of the highest quality, with the purpose of improving the quality of people's lives, using sustainable and culturally acceptable resources.",
        'about3': 'VISION',
        'about4': 'To be a company that contributes to creating the necessary conditions for everyone to live with dignity and develop freely, through science and technology, under a sustainable, fair and scalable scheme.',
        'about5': 'The team'
      },
      lang: 'es',
        es_str: 'es',
        en_str: 'en',
      clipped: false,
      drawer: false,
      fixed: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
      get_text: function( test_s ) {
        if (this.$store.state.lang == 'es') {
          return this.es[test_s]
        } else{
          return this.en[test_s]
        }
      },

      changeLang() {
        this.$store.commit('changeLang')
      },
    }
}
</script>

<style scoped>
#geti-text{
  text-align:right;
  font-family: 'Gotham Bold';
  font-size: 1.1rem;
  color: white;
}

</style>

