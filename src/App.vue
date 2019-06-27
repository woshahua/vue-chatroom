<template>
  <v-app>
    <v-toolbar fixed>
      <v-icon>chat</v-icon>
    </v-toolbar>
    <!--use absolute to locate in global-->
    <HelloWorld></HelloWorld>
    <!-- <div class="bottom">
      <v-layout row>
      <v-flex xs12 sm4 md3>
          <v-text-field
            class="input"
            label="type..."
            single-line
            outline
            @keyup.13="sendMessage"
          ></v-text-field>
        </v-flex>
        <v-btn round class="sendBtn" color = "info" @click="sendMessage">Send</v-btn>
      </v-layout>
      
      <input type="text" id="sendtxt" v-model.trim="inputMsg" @keyup.13="sendMessage"> -->
    <v-bottom-nav fixed>
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
    }
  },
}
</script>
