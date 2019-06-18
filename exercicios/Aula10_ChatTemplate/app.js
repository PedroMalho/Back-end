// require and instantiate express
var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

// Registar o evento Connection

io.on('connection', function(socket) {
    console.log("New User Connected");
    console.log(socket.id);
        //default username
        socket.username = "Anonymous";

    //change username
    socket.on('send_username', (data) => {
        console.log(data);
        socket.username = data.username;
    });

    //disconnect
    socket.on('disconnect', function(){
        console.log(socket.id + ' has disconnected.');
    });

    //send message
    socket.on('send_message', (data) => {
        console.log(data);
        console.log(socket.username + ' : ' + data.message);
        io.sockets.emit('broadcast_message', { message: data.message, username: socket.username});
    });
});





