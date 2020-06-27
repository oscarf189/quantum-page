<template>
  <v-container fluid class="pa-0">
    <v-row class="pa-0">
      <v-col class="pa-0">

        <!-- Slogan -->
        <slogan :sloganText="get_text('slogan')"
                :sloganText1="get_text('about1')"
                :sloganText2="get_text('about2')"
                :sloganText3="get_text('about3')"
                :sloganText4="get_text('about4')"
        ></slogan>

        <!-- la problematica 'problematicaX'  -->
        <problematica :problematica1="get_text('problematica1')"
                      :problematica2="get_text('problematica2')"
                      :problematica3="get_text('problematica3')"
                      :problematica4="get_text('problematica4')"
                      :problematica5="get_text('problematica5')"
                      :problematica6="get_text('problematica6')"
                      :problematica7="get_text('problematica7')"
        ></problematica>
        <!-- desafio señora candela -->
        <desafio :desafio1="get_text('senocandela1')"
                 :desafio2="get_text('senocandela2')"
                 :desafio3="get_text('senocandela3')"
        >
        </desafio>
        <!-- geti paragraph -->
        <geti :diapogeti1="get_text('diapogeti1')"
              :diapogeti2="get_text('diapogeti2')"

        >
        </geti>

        <!-- Geti info
        <geti-info :getis1="get_text('getis1')"
                   :getis2="get_text('getis2')"
                   :getis3="get_text('getis3')"></geti-info>
        -->
        <!-- Geti carousel -->
        <getis-carousel :carousel1="get_text('getis4-2')"
                        :carousel2="get_text('getis4-3')"
                        :carousel3="get_text('getis2-1')"
                        :carousel4="get_text('getis2-2')"
                        :carousel5="get_text('getis2-3')"
                        :carousel6="get_text('about5')"
        ></getis-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Slogan from '~/components/slogan.vue'
import Problematica from '~/components/problematica.vue'
import Desafio from '~/components/desafio.vue'
import GetiInfo from '~/components/getiInfo.vue'
import Geti from '~/components/geti.vue'
import GetisCarousel from '~/components/getis-carousel.vue'
  export default {
    components: {
      Slogan,
      Problematica,
      Desafio,
      GetiInfo,
      Geti,
      GetisCarousel
    },

    data() {
      return {
        es: {
          'menu1': 'GETI',
          'menu2': 'ACERCA DE',
          'slogan': 'Satisfacemos necesidades energéticas usando la ciencia.',
          'problematica1': 'LA PROBLEMÁTICA',
          'problematica2': 'Es indiscutible que el modelo de desarrollo basado en combustibles fósiles no puede continuar, éste ha puesto en riesgo la sobrevivencia de la humanidad y ha creado una desigualdad en Guatemala.',
          'problematica3': 'población padece de pobreza',
          'problematica4': '1.4 millones',
          'problematica5': 'no tienen electricidad y utilizan candelas',
          'problematica6': '11 millones',
          'problematica7': 'dependen de la leña',
          'senocandela1' : 'En ',
          'senocandela2': 'QUANTUM',
          'senocandela3': ' nos propusimos crear un modelo sostenible e inclusivo, en donde las personas vivan dignamente y se desarrollen con libertad para alcanzar su propia felicidad.',
          'diapogeti1': 'GETI',
          'diapogeti2': 'Creamos un dispositivo que aprovecha el calor excedente de las estufas al hervir agua, para generar energía eléctrica. Este puede utilizarse como luz y cargador por puerto USB, reemplazando así las candelas que son 15 veces más contaminantes que los cigarrillos. ',
          'diapogeti3': 'GETI.',
          'diapogeti4': 'Este puede utilizarse como luz y cargador por puerto USB, reemplazando así las candelas que son 15 veces más contaminantes que los cigarrillos.',
          'getis1': 'EL GETI',
          'getis2-1': 'Utilizalo como luz',
          'getis2-2': 'Puerto USB',
          'getis2-3': 'Cero emisiones',
          'getis3': 'Satisfacemos necesidades energéticas usando la ciencia.',
          'getis4-1': 'Agua caliente',
          'getis4-2': 'Superficie caliente',
          'getis4-3': 'Lámpara para techo',
          'footer1': 'síguenos',
          'footer2': 'suscríbete',
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
            'problematica1': 'THE PROBLEM',
            'problematica2': "It is indisputable that the fossil fuel-based development model cannot continue, it has put humanity's survival at risk and created inequality in Guatemala",
            'problematica3': 'population are in poverty',
            'problematica4': '1.4 millions',
            'problematica5': "don't have electricity and use candles",
            'problematica6': '11 millions',
            'problematica7': 'depend on firewood',
            'senocandela1': 'At ',
            'senocandela2': 'QUANTUM',
            'senocandela3': '  we set out to create a sustainable and inclusive model, where people live with dignity and develop freely to achieve their own happiness.',
            'diapogeti1': 'GETI',
            'diapogeti2': 'We created a device that takes advantage of the excess heat from the stoves by boiling water, to generate electricity. Can be used for lighting or as a USB port charger. And so replace candles that are 15% more polluting than cigarettes.',
            'getis1': 'THE GETI',
            'getis2-1': 'Use it as light',
            'getis2-2': 'USB Port',
            'getis2-3': 'Zero emissions',
            'getis3': 'We satisfy energy needs using science.',
            'getis4-1': 'Hot water',
            'getis4-2': 'Hot plate',
            'getis4-3': 'Roof lamp',
            'footer1': 'follow us',
            'footer2': 'subscribe',
            'about1': 'MISSION',
            'about2': "We use science to develop technology of the highest quality, with the purpose of improving the quality of people's lives, using sustainable and culturally acceptable resources.",
            'about3': 'VISION',
            'about4': 'To be a company that contributes to creating the necessary conditions for everyone to live with dignity and develop freely, through science and technology, under a sustainable, fair and scalable scheme.',
            'about5': 'The team'
          },
        lang: 'es',
        es_str: 'es',
        en_str: 'en',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
         ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
         ],
      }
    },

    methods: {
      get_text: function( test_s ) {
        if (this.$store.state.lang == 'es') {
          return this.es[test_s]
        } else{
          return this.en[test_s]
        }
      }
    }


  }
</script>

<style scoped>
body{
  font-size: 40px;
}
h1{
  font-size: 3rem;
  color: #01399C;
  font-family: 'Gotham Narrow';
}
h2{
  font-family: 'Gotham Narrow';
  font-size: 2rem;
}
h3{
  font-size: 1rem;
  font-family: 'Gotham Narrow';
}
h4{
  font-size: 0.7rem;
}
p{
  margin-block-end: 0;
  font-size: 15pt;
  color: #01399C;
  font-family: 'Gotham Narrow';
  text-align: justify;
}
.v-carousel__controls__item {
  border-color: #01399C !important;
}
.mdi-circle{
  border-color: red;
}
.info{
  text-align: center;
}
</style>
