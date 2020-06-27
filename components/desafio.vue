<template>
  <div style='overflow-x: hidden;'>
    <!-- Web -->
    <v-container class="ma-0 d-none d-md-flex" id="senocandela" fluid>
      <v-container id='match-height'>
        <v-row align="center" justify="end" class="fill-height" style="min-height: 63vh">
          <v-col :offset="4" :offset-xl="6" :offset-lg="6" :offset-md="6" :offset-sm="5"
                :cols='8' :xl='5' :lg="5" :md="5" :sm="6" >
            <div style="text-align: right">
              <span class='span-text'>
                {{ desafio1 }}
              </span>
              <span class='span-text' id='quantum-highlight'>
                {{ desafio2 }}
              </span>
              <span class='span-text'>
                {{ desafio3 }}
              </span>
            </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-container>
    <!-- iPad view -->
    <v-container class="py-0 d-none d-sm-block d-md-none">
      <v-row>
        <v-col class='py-0'>
        <v-img src="senora-new-big.JPG" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
        </v-col>
      </v-row>
      <v-row style="background-color: #c45241ff">
        <v-col class='py-10'>
          <div class='en-quantum'>
            <span class='span-text-phone'>
              {{ desafio1 }}
            </span>
            <span id='quantum-highlight' class='span-text-phone'>
              {{ desafio2 }}
            </span>
            <span class='span-text-phone'>
              {{ desafio3 }}
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <v-img src="geti-new-big.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Phone -->
    <v-container class="py-0 d-block d-sm-none">
      <v-row>
        <v-col class='py-0'>
        <v-img src="senocandela-new.jpg" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
        </v-col>
      </v-row>
      <v-row style="background-color: #c45241ff">
        <v-col class='py-10'>
          <div style="text-align: center" class='px-4'>
            <span class='span-text-phone'>
              {{ desafio1 }}
            </span>
            <span id='quantum-highlight' class='span-text-phone'>
              {{ desafio2 }}
            </span>
            <span class='span-text-phone'>
              {{ desafio3 }}
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
        <v-img src="geti-new.png" style="height:auto; min-height: 30vh ; width: 100%; position: center center"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'desafio',
  props: ['desafio1', 'desafio2', 'desafio3']
}
</script>

<style>
#match-height{
  min-height: 50vh;
}

#senocandela{
  background-image: url("/senoracandela.png");
  background-size: cover;
  background-position: top center;
  min-height: 55vh;
}

#quantum-highlight{
  font-size: 1.8rem;
  font-family: 'Gotham Bold';
  color: #dea639;
}

.span-text{
  font-family: 'Gotham Book';
  font-size: 1.5rem;
  color: white;
  text-align: end;
}

.span-text-phone{
  font-family: 'Gotham Book';
  font-size: 1.5rem;
  color: white;
  text-align: end;
}

.en-quantum{
  text-align: center;
  padding: 5vh 12vw;
}
</style>
