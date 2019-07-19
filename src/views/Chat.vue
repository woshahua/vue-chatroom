<template>
<div class="container">
<div class="chat">
<v-container class="chatContainer" v-for="(item, index) in messageList" :key= index fluid grid-list-lg>
<div class= "layout row" :class="{'justify-end': didyouSend(item.name)}">
<v-flex xs8>
<v-avatar v-if="didyouSend(item.name)">
  <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"></v-img>
</v-avatar>
<v-avatar v-if="!didyouSend(item.name)">
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
<v-card class = "chatMessage" color = "light-blue lighten-2">
<v-card-text>{{item.text}}</v-card-text>
</v-card>
</v-flex>
</div>
</v-container>
</div>
 <div class="bottom">
      <v-layout row>
      <v-flex xs12 sm4 md3>
          <v-text-field
            class="input"
            label="type..."
            single-line
            outline
            v-model.trim="inputMsg"
            @keyup.13="sendMessage"
          ></v-text-field>
        </v-flex>
        <v-btn round class="sendBtn" color = "info" @click="sendMessage">Send</v-btn>
      </v-layout>
    </div>   
</div>

</template>

<script>
export default{
  name: "chat",
  data(){
    return {
      message: "",
      messageList: [],
      inputMsg: "",
      userName: "",
      isOwn: false,
    }
  },
  methods:{
    sendMessage(){
      this.$socket.emit("message", {name: this.userName, room: "lobby", text: this.inputMsg, robot: true})
      this.messageList.push({name: this.userName, room: "lobby", text: this.inputMsg, robot: true})
      this.inputMsg = ""
    },
    didyouSend(name){
      return this.userName === name
    }
  },
  // mounted(){
  //   this.$socket.emit("login")
  // },
  sockets:{
    login(data){
      this.userName = data.name
    },
    message(data){
      this.messageList.push(data)
    }
  }
}
</script>
<style>
.bottom{position: fixed;bottom:10px; left: 0; width:100%; height: 50px; background: #fff;}
.chat{position:relative; top: 50px;}
</style>

