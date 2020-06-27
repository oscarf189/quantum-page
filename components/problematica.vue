<template>
  <v-container fluid style='background-color: #EBECEE;' class="pa-0">
    <v-container fluid id="problematica" class='pa-0'>
    <v-container fluid id = "laproblematica">
      <v-container >
        <v-row justify="center" align="center" class="pa-10 fill-height" style="min-height: 60vh">
          <!-- La problematica intro -->
          <v-col lg="5" md='5' sm='6'>
            <v-row>
              <v-col style="text-align: left">
                <h2 class="y-h2">
                  {{ problematica1}}
                </h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="text-align: left">
                <span class = "text" id='problematica2-p'>
                  {{ problematica2 }}
                </span>
              </v-col>
            </v-row>
          </v-col>
          <!-- Section with comparisons -->
          <v-col lg='5' md='5' sm='5'>

            <v-row align="center" justify="center">
              <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
                <v-img class="problematica-img align-end" src="60.svg" contain></v-img>
              </v-col>
              <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
                <span class='problematica-p small-lines'>
                  {{ problematica3 }}
                </span>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
              <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
                <v-img class="problematica-img" src="candelas.svg" contain></v-img>
              </v-col>
              <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
                <v-row>
                  <v-col class='py-0'>
                    <span style="font-family: 'Gotham Bold'" class='problematica-p small-lines '>
                      {{ problematica4 }}
                    </span>
                    <span class='problematica-p small-lines '>
                      {{ problematica5 }}
                    </span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- Candelas -->
            <v-row align="center" justify="center">
              <v-col lg='4' md='4' sm='5' xs='5' class="pa-2">
                <v-img class="problematica-img" src="fuego.svg"></v-img>
              </v-col>
              <v-col lg='5' md='5' sm='6' xs='6' class='px-0'>
                <v-row>
                  <v-col class='py-0'>
                    <span class='problematica-p small-lines ' style="font-family: 'Gotham Bold'">
                      {{ problematica6 }}
                    </span>
                    <span class='problematica-p small-lines '>
                      {{ problematica7 }}
                    </span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'problematica',
  props: ['problematica1',
          'problematica2',
          'problematica3',
          'problematica4',
          'problematica5',
          'problematica6',
          'problematica7']
}
</script>

<style scoped>
span {
  font-family: 'Myriad Pro';
}

.small-lines {
  line-height: 1.1em;
}

p {
  font-family: 'Gotham Book';
}

h2 {
  font-family: 'Gotham Narrow Bold';
  letter-spacing: 0.15em;
}

.y-h2{
  color: #dea639;
  font-size: 2.1rem;
}

.problematica-p{
  font-size: 1.6rem;
  color:#262729;
}

#problematica2-p{
  font-size: 1.6rem
}

#problematica{
  background-image:url("../static/e-verde.svg");
  background-size: 15%;
}
#laproblematica{
  padding: 0;
  background-image: url("/e-naranja.svg");
  background-position: bottom right;
  background-size: 15%;
}

.problematica-img{
  height: 13vh;
  width: 13vh;
  align-content: flex-end;
}

.text{
  color: #737476;
}
</style>
