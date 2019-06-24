<template>
  <v-app>
    <!--use absolute to locate in global-->
    <v-bottom-nav absolute>
      <v-tabs color="grey lighten-1"
      dark 
      fixed-tabs
      icons-and-text
      slider-color="yellow">
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