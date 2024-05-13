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
        <img src="../assets/img/my-img.png" alt="" class="my_image">
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

    <v-timeline alihgn="start" class="ma-5">
      
    <v-timeline-item
      dot-color="#e86127ff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #e86127ff"
          class="pt-1 headline font-weight-bold"
          v-text="2022"
        ></div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #e86127ff" >HTML <v-icon>mdi-language-html5</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#2761e8ff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #2761e8ff"
          class="pt-1 headline font-weight-bold"
        >2022-2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #2761e8ff" >CSS <v-icon>mdi-language-css3</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#7a11f2ff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #7a11f2ff"
          class="pt-1 headline font-weight-bold"
        >2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #7a11f2ff" >Bootstrap <v-icon>mdi-bootstrap</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#c76394ff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #c76394ff"
          class="pt-1 headline font-weight-bold"
        >2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #c76394ff" >SASS <v-icon>mdi-sass</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#f0d71dff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #f0d71dff"
          class="pt-1 headline font-weight-bold"
        >2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #f0d71dff" >JavaScript <v-icon>mdi-language-javascript</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#3eb37eff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #3eb37eff"
          class="pt-1 headline font-weight-bold"
        >2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #3eb37eff" >Vue <v-icon>mdi-vuejs</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#adddffff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #adddffff"
          class="pt-1 headline font-weight-bold"
        >2023</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #adddffff" >Vuetify <v-icon>mdi-vuetify</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#1c76baff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #1c76baff"
          class="pt-1 headline font-weight-bold"
        >2024</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #1c76baff" >Webpack <v-icon>mdi-webpack</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#208ebdff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #208ebdff"
          class="pt-1 headline font-weight-bold"
        >2024</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #208ebdff" >Wordpress <v-icon>mdi-wordpress</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#208ebdff"
      size="small"
    >
      <template v-slot:opposite>
        <div
          style="color: #5ed2f2"
          class="pt-1 headline font-weight-bold"
        >2024</div>
      </template>
      <div>
        <h2 class="mt-n1 headline font-weight-light mb-4">
          <span style="color: #5ed2f2" >React <v-icon>mdi-react</v-icon></span>
        </h2>
      </div>
    </v-timeline-item>

    </v-timeline>    
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
          color: '#208ebdff',
          year: '2024',
          language: 'Wordpress',
          icon: 'mdi-wordpress'
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

  .my_image{
    width: 500px;
    border-radius: 50%;
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