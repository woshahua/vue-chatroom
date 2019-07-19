const express = require("express");
const app = express();
const http = require("http");
const chatServer = require("./chat_server");

app.set("port", process.env.PORT || 3000);

const server = http.createServer(app);
chatServer.listen(server);

server.listen(app.get("port"), function(){
    console.log(`server listen on port:${app.get("port")}`)
});
