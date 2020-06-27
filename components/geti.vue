<template >
  <v-container fluid style='overflow-x: hidden'>
    <!-- Bigger -->
    <v-container fluid class='d-none d-sm-none d-md-flex' id="geti">
      <v-container>
        <v-row v-row align="center" class="fill-height" style="min-height: 60vh">
          <v-col :offset="1" :lg="5" :md="5" :sm="6">
            <h1 id='title1'>{{ diapogeti1 }}</h1>
            <h3 id='main-text-1' style="text-align: left">{{ diapogeti2 }}</h3>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-container>
    <!-- iPad -->
    <v-container fluid class="d-none d-sm-block d-md-none pa-0">
      <v-row align="center" justify="center" class='flex-row fill-height'>
        <v-col cols="12">
          <h3 id="geti-text-ipad" class='main-text-1'>{{ diapogeti2 }}</h3>
        </v-col>
      </v-row>
    </v-container>
    <!-- Phone -->
    <v-container fluid class='d-sm-none d-flex mt-12'>
      <v-row align="center" justify="center" class='flex-row fill-height'>
        <v-col cols="12">
          <h3 class='main-text-1'>{{ diapogeti2 }}</h3>
        </v-col>
      </v-row>
    </v-container>

   </v-container>

</template>

<script>
export default {
  name: 'geti',
  props: ['diapogeti1', 'diapogeti2']
}
</script>

<style>
#title1{
  text-align: left;
  font-family: 'Gotham Narrow Bold';
  font-size: 3rem;
  color: #dea639;
}

.main-text-1{
  color: #389B6D;
  font-family: 'Gotham Book';
  font-size: 1.5rem;
  text-align: center;
}

#geti{
  background-image: url("/geti-fondo.png");
  background-color: white;
  background-position: bottom right;
  background-size: contain;
  text-align: center;
  padding: 0%;
  min-height: 60vh;
}

#geti-text-ipad{
  padding: 5vh 12vw;
}

</style>
