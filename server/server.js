const express = require("express");
const app = express();
const http = require("http");
const chatServer = require("./chat/chat_server");


app.set("port", process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html');

app.get("/", function(req, res){
    res.render(__dirname + "/index.html")
});

const server = http.createServer(app);
chatServer.listen(server);

server.listen(app.get("port"), function(){
    console.log(`server listen on port:${app.get("port")}`)
});
