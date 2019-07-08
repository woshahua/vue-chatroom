

<template>
  <v-app>
    <v-toolbar fixed>
     <!-- <v-icon flat>chat</v-icon> -->
      <v-tab to="/" @click="backHome" v-if="!didshowBottom">
      <v-icon>arrow_back</v-icon>
      </v-tab>
      <v-layout justify-space-around>
      <v-icon large color="blue darken-2" v-if="didshowBottom">chat</v-icon>
      </v-layout>
    </v-toolbar>
    <router-view />
      <v-bottom-nav absolute v-if="didshowBottom">
      <v-tabs color="blue grey lighten-5"
      fixed-tabs
      icons-and-text
      slider-color="light blue darken-4">
      <v-tab to="/">
      Home
      <v-icon>home</v-icon>
      </v-tab>
      <v-tab to="/chat" @click="chat2bot">
      Robot
      <v-icon>android</v-icon>
      </v-tab>
      <v-tab to="/about" @click="hideBottom">
      Account
      <v-icon>account_circle</v-icon>
      </v-tab>
      </v-tabs>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default{
  name: "app",
  data(){
    return{
      didshowBottom: true,
      showBot: false,
    }
  },
  methods:{
    hideBottom(){
      this.didshowBottom = false
    },
    showBottom(){
      this.didshowBottom = true
    },
    chat2bot(){
      this.didshowBottom = false
      this.showBot = true
    },
    backHome(){
      this.didshowBottom = true
      this.showBot = false
    }
  },
}
</script>