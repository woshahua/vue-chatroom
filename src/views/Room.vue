<template>
<div>
<div class="container" v-if="showChat">
<div class="chat">
<v-card color="blue" v-if="hasNews">
<v-card-title >
    <div>
    <h3>{{newsObj.title}}</h3>
    <div>
        {{newsObj.description}}
    </div>
    </div>
</v-card-title>
</v-card>
<v-container class="chatContainer" v-for="(item, index) in messageList" :key= index fluid grid-list-lg>
<div class= "layout row" :class="{'justify-end': didyouSend(item.name)}">
<v-flex xs8>
<v-layout row>
<v-avatar>
  <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"></v-img>
</v-avatar>
<p>{{item.name}}</p>
</v-layout>
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
      
      <!-- <input type="text" id="sendtxt" v-model.trim="inputMsg" @keyup.13="sendMessage"> -->
    </div>   
</div>
<div class = "room" v-if="!showChat">
    <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 v-for="(item, index) in items" :key = index>
            <v-card color="blue lighten-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{item}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark @click="joinRoom(item)">join now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>
  </v-container>
</div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [],
        curRoom: "",
        message: "",
        messageList: [],
        inputMsg: "",
        userName: "",
        showChat: false,
        newsObj: "",
        hasNews: false,
      }
    },
    methods:{
        joinRoom(room){
            this.curRoom = room;
            this.showChat = true;
        },
        sendMessage(){
          if(this.inputMsg.includes("@news")){
              this.$socket.emit("news")
          }else{
            this.$socket.emit("message", {name: this.userName, room: "lobby", text: this.inputMsg})
          }
          this.inputMsg = ""
        },
        didyouSend(name){
          return this.userName === name
        }
    },
    mounted(){
        this.$socket.emit("roomList");
    },
    sockets:{
        roomList(data){
            this.items = data.room;
        },
        login(data){
          console.log("login data " + data)
          console.log(data.name)
          this.userName = data.name
        },
        message(data){
          this.messageList.push(data)
        },
        news(data){
            this.newsObj = data
            this.hasNews = true
        }
    }
  }
</script>

<style>
.room {position:relative; top: 50px;}
.bottom{position: fixed;bottom:10px; left: 0; width:100%; height: 50px; background: #fff;}
.chat{position:relative; top: 50px;}
</style>
