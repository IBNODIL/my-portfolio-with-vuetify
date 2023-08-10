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

    <v-timeline align="start">
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
  export default {
    data: () => ({
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
