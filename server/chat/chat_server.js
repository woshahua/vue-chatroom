// TODO: use authorization to check user
// maybe add this on the express
const socketio = require("socket.io");
var io;
var currentRoom = []

exports.listen = function(server){
    io = socketio.listen(server);
    // dont get too much log, default log 3 is too much
    // log level is not valid
    // io.set("log level", 1);
    io.sockets.on("connection", function(socket){
        joinRoom(socket, "lobby")
    })
}

function joinRoom(socket, room){
    // what is room stand for 
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit("join", {room: room});
    socket.broadcast.to(room).emit("message",{
        text: "someone has joined" + room
    });
    // TODO: maybe add usersInfo broadcast here
}