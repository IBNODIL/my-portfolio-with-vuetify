<template>
  <v-layout>
    <v-list id="div" class="d-flex align-center justify-space-around pa-6 flex-column flex-sm-column flex-md-row" style="min-width: 100vw; max-width: 100vw;
    min-height: 100vh;">
      <v-list-item class="text-div">
        <p> Hi. My name is  </p>
        <h2 class="name">Rustamov Mubashshirhon</h2>
        <h2 class="not-name">I am a Fron-end developer</h2>
        <h2 class="not-name">from Uzbekistan</h2>
      </v-list-item>

      <v-list-item id="img-div">
        <img src="../assets/img/my-img.png" alt="" class="rounded-circle">
      </v-list-item>

      <v-btn 
        id="to-about-from-home"
        color="green-darken-2" 
        icon
        to="/aboutme"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-list>
  </v-layout>
</template>


<script>

</script>


<style scoped>
  .name{
    font-size: 50px;
  }

  .not-name{
    font-size: 40px;
  }

  .text-div{
    width: 50%;
  }

  @media screen and (max-width: 1260px) {
    #div{
      max-width: 90vw;
      font-size: 20px;
    }
    #to-about-from-home{
      position: absolute;
      top: 200px;
      right: 50px;
    }
  }

  @media screen and (max-width: 1100px) {
    #img-div{
      width: 40%;
    }

    #img-div img{
      width: 100%;
    }
  }

  @media screen and (max-width: 960px) {
    .text-div{
      width: 90vw;
    }

    #img-div{
      width: 85%;
    }
    .name{
      font-size: 30px;
    }

    .not-name{
      font-size: 20px;
    }

    #to-about-from-home{
      position: absolute;;
      top: 40%;
      right: 50px;
    }
  }

  
</style>