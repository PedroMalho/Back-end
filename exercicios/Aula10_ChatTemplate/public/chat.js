$(function () {
    //make connection
    var socket = io.connect();

    var users = [];
    //buttons and inputs
    var message = $("#message");
    var send_message = $("#send_message");
    var chatroom = $("#chatroom");
    var feedback = $("#feedback");
    var username = $("#username");
    var send_username = $("#send_username");

    //Emit message
    send_message.click(function () {
        socket.emit('send_message', { message: message.val() });
        console.log(message.val());
    });

    //Listen on new_message
    socket.on('broadcast_message', function (data) {
        chatroom.append("<li>" + data.username + ": " + data.message + "</li>");
    });

    //Emit username
    send_username.click(function () {        
        socket.emit('send_username', { username: username.val()});
        console.log(username.val());
    });

});