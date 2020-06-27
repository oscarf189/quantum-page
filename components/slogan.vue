<template>
  <div>
  <!-- slogan   'slogan',  -->
    <v-container fluid id="slogan" class="pa-0 d-none d-md-flex">
      <v-carousel :show-arrows="true"
                  hide-delimiter-background
                  light
                    height="500px"
                    >
        <!-- Presentation slide -->
        <v-carousel-item >
          <v-img src="imgcontest.png" style="height:500px; width: auto; position: center center"></v-img>
        </v-carousel-item>
        <!-- Slogan slide -->
        <v-carousel-item>
          <v-container fluid class="carousel-item2" >
            <v-row align="center" justify="center" class="fill-height">
              <v-col>
                <v-row align="center" justify="center">
                    <v-col class='px-7'>
                    <h2 style="color: white; text-align: center; font-size: 2.4rem; font-family: 'Gotham Bold'">{{ sloganText }}</h2>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col class="img-car px-6 px-sm-3 px-md-3 px-lg-3 px-xl-3" xs='10' sm='10' md='7' lg='7'>
                    <v-img  src="slogan3.png"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
   </v-container>
   <!-- iPad view -->
   <v-container fluid class="d-none d-sm-block d-md-none pa-0">
      <!-- Slogan -->
      <v-container class='pa-0 carousel-item2'>
        <v-row align="center" justify="center" class="fill-height">
          <v-col class='py-0'>
            <v-row align="center" justify="center">
              <v-col class='px-7 px-sm-7 py-0'>
                <h2 style="color: white; text-align: center; font-size: 2.4rem; font-family: 'Gotham Bold'">{{ sloganText }}</h2>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="img-car px-10" xs='10'>
                <center>
                  <v-img style="height: 75%; width: 75%" src="slogan3.png"></v-img>
                </center>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!-- Mission/Vision -->
      <v-container>
        <v-container id="mission-container">
          <v-row class=".align-center .justify-center">
            <v-col class="py-0" id='background-mision-ipad'>
              <h1 id='mision-vision-ipad-heading' style="color: #c45241ff;">
                {{ sloganText1 }}
              </h1>
              <p class='mision-vision-ipad'>
                {{ sloganText2 }}
              </p>
            </v-col>
            <v-col class="py-0" id='background-vision-ipad'>
              <h1 id='mision-vision-ipad-heading' style="color: #c45241ff;">
                {{ sloganText3 }}
              </h1>
              <p class='mision-vision-ipad'>
                {{ sloganText4 }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <!-- Conference photo -->
      <v-container class='pa-0'>
        <v-row>
          <v-col class='py-0'>
          <v-img src="imgcontest.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
          </v-col>
        </v-row>
      </v-container>
   </v-container>
    <!-- phone view -->
    <v-container fluid class="d-block d-sm-none pa-0">
      <!-- Slogan -->
      <v-container class='pa-0 carousel-item2'>
        <v-row align="center" justify="center" class="fill-height">
          <v-col class='py-0'>
            <v-row align="center" justify="center">
              <v-col class='px-7 px-sm-7 py-0'>
                <h2 style="color: white; text-align: center; font-size: 2.4rem; font-family: 'Gotham Bold'">{{ sloganText }}</h2>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="img-car px-10" xs='10'>
                <v-img  src="slogan3.png"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <!-- Mision/vision -->
      <v-container>
        <v-row class=".align-center .justify-center">
          <v-col class="py-0" id='background-mision-phone'>
            <h1 id='mision-vision-phone-heading' style="color: #c45241ff;">
              {{ sloganText1 }}
            </h1>
            <p id='mision-vision-phone' style='color: #c45241ff;'>
              {{ sloganText2 }}
            </p>
          </v-col>
        </v-row>
        <v-row class=".align-center .justify-center" style='padding-top: 1.5rem'>
          <v-col class="py-0" id='background-vision-phone'>
            <h1 id='mision-vision-phone-heading' style="color: #c45241ff;">
              {{ sloganText3 }}
            </h1>
            <p id='mision-vision-phone' style='color: #c45241ff;'>
              {{ sloganText4 }}
            </p>
          </v-col>
        </v-row>
      </v-container>
      <!-- Conference photo -->
      <v-container class='pa-0'>
        <v-row>
          <v-col class='py-0'>
          <v-img src="imgcontest.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'slogan',
    props: ['sloganText',
            'sloganText1',
            'sloganText2',
            'sloganText3',
            'sloganText4']
}
</script>

<style scoped>
#mision-vision-phone{

  padding: 0 14vw;
  padding-top: 1vw;
  font-family: 'Gotham Book';
  text-align: center;
}
.mision-vision-ipad{

  padding: 0 7vw;
  padding-top: 1vw;
  font-family: 'Gotham Book';
  text-align: center;
  color: #c45241ff;
  font-size: 2vw;
}

#mision-vision-phone-heading{

  font-family: 'Gotham Bold';
  padding-top: 17vw;
  text-align: center;
  font-size: 2.2rem;
}

#mision-vision-ipad-heading{

  font-family: 'Gotham Bold';
  padding-top: 7vw;
  text-align: center;
  font-size: 4vw;
}

#background-mision-phone{
  background-image: url('../static/about-mision.svg');
  background-size: 98vw;
  background-position: center;
  height: 100vw;
}

#background-mision-ipad{
  background-image: url('../static/about-mision.svg');
  background-size: 90%;
  padding-right: 5vw;
  min-height: 35vh;
}

#background-vision-phone{
  background-image: url('../static/about-vision.svg');
  background-size: 98vw;
  background-position: center;
  height: 100vw;
}

#background-vision-ipad{
  background-image: url('../static/about-vision.svg');
  background-size: 90%;
  padding-right: 5vw;
  height: 45vw;
}

#mission-container{
  margin-left:3vw;
  margin-right:3vw;
}

.img-car {
  width:100%;
  height: auto;
  position: relative;
  text-align: center;
  display: inline-block;
}



.carousel-item2{
  background-color: #1f8c54;
  height: 500px;
  min-height: 50vh;
}
</style>
