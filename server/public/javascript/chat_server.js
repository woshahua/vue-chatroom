// TODO: use authorization to check user
// maybe add this on the express
const socketio = require("socket.io");
const {Bot} = require("./bot")
var io;
var currentRoom = []
var guestNumber = 1;
var nickNames = {};
var nameUsed = [];


exports.listen = function(server){
    io = socketio.listen(server);
    io.sockets.on("connection", function(socket){
        guestNumber = assignGuestName(socket, guestNumber, nickNames, nameUsed);
        joinRoom(socket, "lobby");
        var bot = new Bot();
        socket.on("message", function(message){
            console.log("cur messgage" + message);
            io.sockets.emit("message",message);
            if (message.robot){
                bot.getRobotAns("lobby", message.text, socket);
            }
        });

        handleClientDisconnection(socket, nickNames, nameUsed);
    });


};

function assignGuestName(socket, guestNumber, nickNames, nameUsed){
    var name = "guest" + guestNumber;
    nickNames[socket.id] = name;
    nameUsed.push(name);
    socket.emit("login", {
        sucess: true,
        name: name
    })
    return guestNumber + 1;
}

function joinRoom(socket, room){
    // what is room stand for 
    socket.join(room);
    currentRoom[socket.id] = room;
    // socket.emit("joinRoom", {room: room});
    socket.broadcast.to(room).emit("message",{
        text: "someone has joined " + room
    });
    // TODO: maybe add usersInfo broadcast here
}

function handleClientDisconnection(socket){
    socket.on("disconnect", function(){
        var index = nameUsed.indexOf(nickNames[socket.id]);
        console.log("*** user" + nickNames[socket.id] + " disconnected");
        delete nameUsed[index];
        delete nickNames[socket.id];
    })
}