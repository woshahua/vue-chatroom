class Chat{
    constructor(socket){
        this.socket = socket;
    }

    sendMessage(room, text) {
        var message = {
            room: room,
            text: text
        };
        this.socket.emit("message", message)
    }
}