<template>
  <v-container fluid class="pa-0">
    <template>
      <v-carousel
        :show-arrows="true"
        hide-delimiter-background
        light>
        <!-- 3 getis  1 -->
        <v-carousel-item>
        <v-container fluid class='pa-0' style='background-color: #2E3038; height: 500px'>
          <v-container fluid id="three-getis" class='pa-0'>
          <v-container fluid id="green-left" class='pa-0'>
          <v-container fluid id = "red-bottom" class='pa-0'>
            <v-row>
              <v-col>
                <h1 class="add-font"> {{ getis1 }} </h1>
              </v-col>
            </v-row>
          </v-container>
          </v-container>
          </v-container>
        </v-container>
        </v-carousel-item>
        <!-- geti-icons 2-->
        <v-carousel-item>
          <v-container fluid id="geti-icons">
            <v-row>
              <v-col>
                <v-img src="get-raindbow.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
        <!-- geti abierto we satisfy needs...-->
        <v-carousel-item>
          <v-container fluid id="geti-abierto">
            <v-row class="pa-0 ma-0" align="center" justify="center">
              <v-col style="text-align: center">
                <center>
                <v-img style="width:50%;height:auto" src="geti-top.png"></v-img>
                </center>
              </v-col>
            </v-row>
            <v-row class="pa-0 ma-0" align="center" justify="center">
              <v-col style="text-align: center">
                <center>
                <h3 class="add-font">{{ getis3 }}</h3>
                </center>
              </v-col>
            </v-row>
            <v-row class="pa-0 ma-0" align="center" justify="center">
              <v-col style="text-align: center">
                <center>
                <v-img style="width:20%;height:20%" src="geti-bottom.png"></v-img>
                </center>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
        <!-- geti con lampara 4 -->
        <v-carousel-item>
          <v-container fluid id="geti-lampara">
            <v-row align="center" justify="center">
              <v-col>
                <v-img contain style="width:35%;height:35%" src="geti-red.png"></v-img>
              </v-col>
              <v-col>
                <v-img contain style="width:5%;height:10%" src="geti-light.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

      </v-carousel>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'geti-info',
  props: ['getis1', 'getis2', 'getis3']
}
</script>

<style>
#add-font{
  font-family: 'Gotham Narrow';
}

#green-left{
  background-image:url("../static/e-verde.svg");
  background-size: 15%; 
  height: 500px;
  width: auto;

}
#red-bottom{
  padding: 0;
  background-image: url("/e-naranja.svg");
  height: 500px;
  width: auto;
  background-position: bottom right;
  background-size: 15%;
}

#geti-abierto{
  text-align: center;
  background-color: #d2d2d2;
}

#geti-lampara{
  text-align: center;
  background-color: #cdcdcd;
}

#three-getis{
  background-image: url("/3getis.png");
  background-size: contain;
  height: auto;
  width: 100%;
  background-position: center center;
}

#geti-icons{
  background-color: #CCCCCC;
}
</style>