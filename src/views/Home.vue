<template>
  <div>
    <v-list id="div" class="d-flex align-center justify-space-around pa-6 flex-column flex-sm-column flex-md-row" style="min-width: 100vw; max-width: 100vw;
    min-height: 100vh;">
      <v-list-item class="text-div">
        <p> Hi. My name is  </p>
        <h2 class="name">Rustamov Mubashshirhon</h2>
        <h2 class="not-name">I am a Front-end developer</h2>
        <h2 class="not-name">from Uzbekistan</h2>
      </v-list-item>

      <v-list-item id="img-div">
        <img src="../assets/img/my-img.png" alt="" class="rounded-circle">
      </v-list-item>      
    </v-list>
  </div>

  <div id="about-me">
    <v-list class="d-flex align-center justify-space-between flex-column" style="min-width: 100vw; max-width: 100vw;">
    <v-list-item class="ma-10">
      <p 
        class="text-uppercase"
        id="text"
      >
      Hello, I'm Rustamov Mubashshirhon. I'm a front-end developer from Uzbekistan. I started my programming journey in 2022. I began by learning HTML. In March 2023, I launched my first website online. At that time, I wasn't familiar with JavaScript<v-icon>mdi-language-javascript</v-icon>, so my first website was composed solely of HTML<v-icon>mdi-language-html5</v-icon> and CSS<v-icon>mdi-language-css3</v-icon>. Programming remained a hobby for me until early 2023. It was then that I began to take programming more seriously.
      </p>
    </v-list-item>

    <v-timeline align="start" class="ma-5">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
          {{year.language}} <v-icon>{{year.icon}}</v-icon>
        </h2>
      </div>
    </v-timeline-item>
    </v-timeline>

    <v-card style="min-width: 90vw; " color="green-darken-2" class="pa-5 ma-5 rounded-xl float-left">
      <h1>I cnow this languges:</h1>
      <v-card-item>
        <v-card-title>English</v-card-title>
        <v-progress-linear
          v-model="english"
          height="15"
        ></v-progress-linear>
      </v-card-item>

      <v-card-item>
        <v-card-title>Russian</v-card-title>
        <v-progress-linear
          v-model="russian"
          height="15"
        ></v-progress-linear>
      </v-card-item>

      <v-card-item>
        <v-card-title>Uzbek</v-card-title>
        <v-progress-linear
          v-model="uzbek"
          height="15"
        ></v-progress-linear>
      </v-card-item>
    </v-card>
    
  </v-list>
  </div>
  
  <div id="certificates" class="d-flex flex-wrap pa-4">
    <v-card elevation="12" class="ma-6 certificates-card">
      <img class="certificates-imgs" src="../assets/certificates/html-certeficate.png" alt="">
    </v-card>

    <v-card elevation="12" class="ma-6 certificates-card">
      <img class="certificates-imgs" src="../assets/certificates/css-certeficate.png" alt="">
    </v-card>

    <v-card elevation="12" class="ma-6 certificates-card">
      <img class="certificates-imgs" src="../assets/certificates/web-dev-fundament-certeficate.png" alt="">
    </v-card>

    <v-card elevation="12" class="ma-6 certificates-card">
      <img class="certificates-imgs" src="../assets/certificates/rsponsiv-web-dev-certeficate.png" alt="">
    </v-card>

    <v-card elevation="12" class="ma-6 certificates-card">
      <img class="certificates-imgs" src="../assets/certificates/mohirdev.jpg" alt="">
    </v-card>
  </div>
</template>


<script>
export default {
    data: () => ({
      english: 62,
      russian: 85,
      uzbek: 85,
      years: [
        {
          color: 'orange',
          year: '2022',
          language: 'HTML',
          icon: 'mdi-language-html5'
        },
        {
          color: 'light-blue-darken-3',
          year: '2022-2023',
          language: 'CSS',
          icon: 'mdi-language-css3'
        },
        {
          color: 'purple-darken-2',
          year: '2023',
          language: 'Bootstrap',
          icon: 'mdi-bootstrap'
        },
        {
          color: 'pink-accent-3',
          year: '2023',
          language: 'SASS',
          icon: 'mdi-sass'
        },
        {
          color: 'yellow-darken-1',
          year: '2023',
          language: 'JavaScript',
          icon: 'mdi-language-javascript'
        },
        {
          color: 'green-darken-3',
          year: '2023',
          language: 'Vue',
          icon: 'mdi-vuejs'
        },
        {
          color: 'cyan-accent-4',
          year: '2023',
          language: 'Vuetify',
          icon: 'mdi-vuetify'
        },
      ],
    }),
  }
</script>


<style scoped>
.certificates-card{
    width: 350px;
  }
  .certificates-imgs{
    width: 100%;
  }

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
  }

  
</style>