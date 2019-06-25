const express = require("express");
const http = require("http");
const app = express();
const chatServer = require("./chat/chat_server");


app.set("port", process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html');

app.get("/", function(req, res){
    res.render(__dirname + "/index.html")
});

const server = http.createServer(app);
server.listen(app.get("port"));

chatServer.listen(server);