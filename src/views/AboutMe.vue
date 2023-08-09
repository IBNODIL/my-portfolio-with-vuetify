<template>
  <v-list class="d-flex align-center justify-space-between flex-column" style="min-width: 100vw; max-width: 100vw;">
    <v-list-item class="ma-10">
      <p 
        class="text-uppercase"
        id="text"
      >
        I embarked on my programming journey in 2022. Firstly, I learned HTML, followed by the frontend developing. In 2023 march, I uploaded my first site to web. Coding remained a hobby for me until early 2023. It was at that point that I started to pursue programming more seriously.
      </p>
    </v-list-item>

    <v-list-item id="road-and-languages"
      bg-color: blue-darken-2
      class="d-flex align-center justify-lg-space-evenly hidden-sm-and-down"
    >
      <div id="langueges"
        class="d-flex align-center justify-lg-space-evenly hidden-sm-and-down "
      >
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-language-html5</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-language-css3</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-bootstrap</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-sass</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-language-javascript</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-vuejs</v-icon>
        <v-icon class="hidden-sm-and-down icon-complated" color="green" >mdi-vuetify</v-icon>
        <v-icon class="hidden-sm-and-down icon-car" color="yellow-darken-3" >mdi-car-lifted-pickup</v-icon>
        <v-icon class="hidden-sm-and-down icon-not-complated" color="red" >mdi-react</v-icon>
        <v-icon class="hidden-sm-and-down icon-not-complated">mdi-dots-horizontal</v-icon>
      </div>
    </v-list-item>

    
  </v-list>

  <v-btn 
        id="to-certificates-from-about"
        color="green-darken-2" 
        icon
        to="/certificates"
        class="hidden-sm-and-down"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>


      <v-btn 
        id="to-home-from-about"
        color="green-darken-2" 
        icon
        to="/"
        class="hidden-sm-and-down"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
</template>


<script>

</script>


<style>
  #text{
    font-size: 25px;
  }

  #road-and-languages{
    position: fixed;
    bottom: 10px;
    right: 0;
    left: 0;
    width: 100vw;
    border-bottom: 20px solid rgb(26, 26, 26);
    padding: 0;
    margin: 0;
  }

  #langueges{
    width: 100vw;
    border-bottom: 5px dashed rgb(205, 205, 205);
    font-size: 30px;
  }

  .icon-car{
    font-size:45px;
  }

  .icon-not-complated{
    font-size: 25px;
  }

  #to-certificates-from-about{
    position: absolute;
    top: 40%;
    right: 50px;
  }

  #to-home-from-about{
    position: absolute;
      top: 40%;
      left: 50px;
  }
</style>
