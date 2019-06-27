var socket = io.connect();
$(document).ready(function(){
    console.log("ready")
    socket.on("message", function(message){
        console.log(message)
        var msgElement = $('<div></div>').text(message.text);
        $("#messages").append(msgElement);
    });
});