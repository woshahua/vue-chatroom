<template>
  <v-app>
    <v-toolbar color="light blue darken-5">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <!--use absolute to locate in global-->
    <v-bottom-nav absolute>
      <v-tabs color="blue grey lighten-5"
      fixed-tabs
      icons-and-text
      slider-color="light blue darken-4">
      <v-tab>
      Home
      <v-icon>home</v-icon>
      </v-tab>
      <v-tab>
      Robot
      <v-icon>android</v-icon>
      </v-tab>
      <v-tab>
      Account
      <v-icon>account_circle</v-icon>
      </v-tab>
      </v-tabs>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>