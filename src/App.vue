<template>
  <v-app :theme="theme">
    <v-layout>
      <v-app-bar prominent class="position-fixed">
        <v-toolbar-title style="font-size: 24px; font-weight: 14px;">IBNODIL</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-list class="d-flex hidden-sm-and-down align-center">
          <v-list-item class="hidden-sm-and-down">
            <v-switch @update:modelValue="changeMode" v-model="switchEquals" inset hide-details color="green-darken-2 "></v-switch>
          </v-list-item>

          <v-btn to="/" variant="text" class="mx-1 hidden-sm-and-down" prepend-icon="mdi-home" color="green-darken-2">
            Home
          </v-btn>

          <a href="/#about-me"><v-btn variant="text" class="mx-1 hidden-sm-and-down" prepend-icon="mdi-information-outline" color="green-darken-2">
            About me 
          </v-btn></a>

          <a href="/#certificates"><v-btn variant="text" class="mx-1 hidden-sm-and-down" prepend-icon="mdi-certificate" color="green-darken-2">
            Certificates
          </v-btn></a>

          <v-btn to="/projects" variant="text" class="mx-1 hidden-sm-and-down" prepend-icon="mdi-file-code-outline" color="green-darken-2">
            Projects
          </v-btn>

          <!-- <v-btn to="/contactme" variant="text" class="ma-1 hidden-sm-and-down" color="green-darken-2">
            Contact with me
          </v-btn> -->
        </v-list>

        <v-app-bar-nav-icon class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary class="position-fixed hidden-md-and-up">
        <v-list>
          <v-btn to="/" variant="text" class="ma-1" prepend-icon="mdi-home" color="green-darken-2">
            Home
          </v-btn>

          <a href="/#about-me"><v-btn variant="text" class="ma-1" prepend-icon="mdi-information-outline" color="green-darken-2">
            About me
          </v-btn></a>

          <a href="/#certificates"><v-btn variant="text" class="ma-1" prepend-icon="mdi-certificate" color="green-darken-2">
            Certificates 
          </v-btn></a>

          <v-btn to="/projects" variant="text" class="ma-1" prepend-icon="mdi-file-code-outline" color="green-darken-2">
            Projects
          </v-btn>

          <!-- <v-btn to="/contactme" variant="text" class="ma-1" color="green-darken-2">
            Contact with me
          </v-btn> -->

          <v-divider></v-divider>

          <v-list-item>
            <v-switch @update:modelValue="changeMode" v-model="switchEquals" inset hide-details color="green-darken-2 "></v-switch>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-app>
</template>


<script>
import { RouterView } from 'vue-router';
export default {
  data: () => ({
    drawer: false,
    group: null,
    theme: 'light',
    switchEquals: false,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },

  methods: {
    changeMode(){
      if(this.switchEquals == false){
        this.theme = 'dark';
      } else{
        this.theme = 'light';
      }
    }
  }
}
</script>


<style>
a{
  display: inline-block;
  text-decoration: none;
  color: white;
}
</style>