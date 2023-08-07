<template>
  <v-app>
    <v-layout>
      <v-app-bar
        color="yellow-darken-2"
        prominent
      >
        <v-toolbar-title>IBNODIL</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-list
          v-for="item in items"
          bg-color="yellow-darken-2"
          class="hidden-sm-and-down"
        >
          <v-btn
          routes
          :to="item.to"
          variant="outlined" 
          class="ma-1" 
          :prepend-icon="item.icon"
          >
            {{ item.title }}
          </v-btn>
        </v-list>

        <v-app-bar-nav-icon class="hidden-md-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        class="hidden-md-and-up"
      >
        <v-list v-for="item in items">
          <v-btn 
          :to="item.to"
          :prepend-icon="item.icon" 
          variant="text"
          >{{ item.title }}</v-btn>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
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
      items: [
        {
          title: 'Home',
          to: '/',
          icon: 'mdi-home'
        },
        {
          title: 'About me',
          to: '/aboutme',
          icon: 'mdi-information-outline'
        },
        {
          title: 'Certificates',
          to: '/certificates',
          icon: 'mdi-certificate'
        },
        {
          title: 'Projects',
          to: '/projects',
          icon: 'mdi-file-code-outline'
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>


<style>

</style>