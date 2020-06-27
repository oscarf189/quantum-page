<template>
  <v-container fluid style='overflow-x: hidden'>
    <!-- Bigger -->
    <v-container fluid id = "getis" class="pa-0 d-none d-md-none d-md-flex">
      <template>
        <v-carousel
          :show-arrows="false"
          hide-delimiter-background
          light
          cycle

        >
          <v-carousel-item
            v-for="(item,i) in items2"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </template>
    </v-container>
    <!-- Phone, iPad -->
    <v-container fluid class="pa-0 d-block d-md-none">
      <v-container class="pa-0 ma-0">
        <v-row>
          <v-col class="pa-0 ma-0">
            <v-img src="2.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="pa-0 ma-0" id="orange-empty">
      </v-container>
      <v-container fluid  class="pa-0 ma-0" id = "geti-pic">
        <v-row>
          <v-col class="pa-0 ma-0">
            <p id="text-caliente">{{ carousel1 }}</p>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="pa-0 ma-0" id="green-empty">
      </v-container>
      <v-container fluid class="pa-0 ma-0" id="luz">
        <v-row>
          <v-col>
            <v-img src="4b.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="text-align: center">
            <p style="color: #168B56">{{ carousel2 }}</p>
          </v-col>
        </v-row>
        <v-container>
          <!-- Luz -->
          <v-row align="center" justify="center">
            <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
              <v-img class="carousel-img align-end" src="luz.svg" contain></v-img>
            </v-col>
            <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
              <span class='carousel-p small-lines' style="font-family: 'Gotham Bold'; color: #C2533F">
                {{ carousel3 }}
              </span>
            </v-col>
          </v-row>
          <!-- USB -->
          <v-row align="center" justify="center">
            <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
              <v-img class="carousel-img" src="usb.svg" contain></v-img>
            </v-col>
            <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
              <span style="font-family: 'Gotham Bold'; color: #1C8952" class='carousel-p small-lines '>
                {{ carousel4 }}
              </span>
            </v-col>
          </v-row>
          <!-- Nube -->
          <v-row align="center" justify="center">
            <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
              <v-img class="carousel-img" src="nube.svg"></v-img>
            </v-col>
            <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
              <span class='carousel-p small-lines' style="font-family: 'Gotham Bold'; color: #000000">
                {{ carousel5 }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container>
        <v-row>
          <v-col style="text-align: center">
            <h2 style = "color: #dea639; font-size: 2.1rem;">{{ carousel6 }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-img src="diego.png"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img src="oscar.png"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-img src="adriana.png"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img src="avishek.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid id="partners">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="6">
              <v-img src="socialab.svg"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img src="coosajo.png"></v-img>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="2.5">
              <v-img src="reversa.svg"></v-img>
            </v-col>
            <v-col cols="5">
              <v-img src="dosis.svg"></v-img>
            </v-col>
            <v-col cols="4">
              <v-img src="plastic.svg"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container fluid id="footer">
        <v-row justify="center" align="center" class="fill-height">
          <v-col cols="3">
            <p class="footer-text">siguenos</p>
          </v-col>
          <v-col cols="1">
            <v-img class="footer-image" src="ig3.svg"></v-img>
          </v-col>
          <v-col>
            <a href="www.google.com">
              <v-img class="footer-image" src="fb3.svg"></v-img>
            </a>
          </v-col>
          <v-col cols="1">
            <v-img id="mail-img" src="mail3.svg"></v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <p class="footer-text">contacto@quantumenergy-e.com</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'getis-carousel',
  props: ['carousel1',
          'carousel2',
          'carousel3',
          'carousel4',
          'carousel5',
          'carousel6'],

  data() {
      return {
        items2: [
          {
            src: 'getisuelto.png',
          },
          {
            src: 'bulletsgueti.png',
          },
          {
            src: 'elgeti.png',
          },
        ],

      }
    },
}
</script>

<style scoped>
.carousel-p{
  font-size: 1.6rem;
  color:#262729;
}
.carousel-img{
  height: 13vh;
  width: 13vh;
  align-content: flex-end;
}
.footer-text{
  color: white;
  font-size: 2vw;
}
.footer-image{
  height: 3vw;
  width: 3vw;
}
#mail-img{
  height: 3vw;
  width: 4vw;
}
#getis{
  background-color: white;
  text-align: center;
  padding: 0%;
}
#orange-empty{
  background-color: #DAA837;
  min-height: 2vh;
}
#green-empty{
  background-color: #168B56;
  min-height: 2vh;
}
#geti-pic{
  background-image: url("../static/4a-new.png");
  background-size: 100%;
}
#luz{
  background-color: #CDCDCD;
  min-height: 58vh;
}
#text-caliente{
  text-align: center;
  padding-top: 94vw;
  color: white;
}
#partners{
  background-color: #F5F5F7;
}
#footer{
  background-color: #C35240;
  min-height: 4vh;
}
</style>
