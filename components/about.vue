<template>
  <v-container style="background-color: #EBECEE">
    <v-container>
      <v-row>
        <v-col>
          <center>
            <h1 class="h1">{{ slogan }}</h1>
          </center>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <center>
            <v-img style="width:60%; height:60%" src="slogan2.svg"></v-img>
          </center>
        </v-col>
      </v-row>

      <v-row style="margin-top:5vh; min-height:60vh;">
        <v-col id="mission">
          <v-container style="text-align:left">
            <v-row>
              <v-col>
                <h3 id="heading-mission">{{ mission1 }}</h3>
                <p id="text-mission">{{ mission2 }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col id="vision">
          <v-container style="text-align:right">
            <v-row>
              <v-col>
                <h3 id="heading-vision">{{ vision1 }}</h3>
                <p id="text-vision">{{ vision2 }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row style="margin-top:5vh">
        <v-col>
          <center>
            <h1 class="h1">{{ equipo }}</h1>
          </center>
        </v-col>
      </v-row>
      <v-row style="margin-top:5vh">
        <v-col>
          <v-img class="faces" src="diego.png"></v-img>
        </v-col>
        <v-col>
          <v-img class="faces" src="oscar.png"></v-img>
        </v-col>
        <v-col>
          <v-img class="faces" src="adriana.png"></v-img>
        </v-col>
        <v-col>
          <v-img class="faces" src="avishek.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  props: ['slogan',
          'mission1',
          'mission2',
          'vision1',
          'vision2',
          'equipo'],
  data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style scoped>
.h1{
  color: #D2A856;
}
#heading-mission{
  color: #C1514D;
  padding-top: 8vw;
  padding-bottom: 0.5rem;
  text-align: center;
}
#text-mission{
  color: #C1514D;
  padding-left: 6vw;
  text-align: center;
  padding-right: 4.7vw;
  font-size: 1rem;
}
#heading-vision{
  color: #C1514D;
  padding-bottom: 0.5rem;
  padding-top: 7vw;
  padding-left: 9vw;
  text-align: center;
}
#text-vision{
  text-align: center;
  color: #C1514D;
  padding-left: 12vw;
  padding-right: 3vw;
}
#mission{
  background-image: url("/cmision.svg");
  background-size: 100%;
  background-position: center;
}

#vision{
  background-image: url("/cvision.svg");
  background-size: 100%;
  background-position: center;
}

</style>
