const express = require('express')
const port = 3000
const fs = require('fs')

const app = express()
var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
    fs.open('log.txt', 'a', function(){
        console.log('Ficheiro Aberto')
    })
})

//Ficheiro log.txt
function writeLog(request, response){
    var log = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFile('log.txt', log, function (err) {
        if (err) throw err;
        console.log('Saved!')
    })
}

// app.get('/', (req, res) => res.send('Hello World!'))


//Cabeçalho + Saudaçao, alinea c
app.get("/root", function(request, response){
    // Escrever cabeçalho
    writeLog(request, response);
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Adeus');
})


app.get('/', function(request, response){
    writeLog(request, response);
    var a = fs.readFileSync('./texto.html');
    String(a);
    response.send(a);
})


app.get('/user', function(request, response, name){
    writeLog(request, response);
    response.writeHead(200, {'Content-type': 'text/pain'});
    name = 'Pedro Malho';
    response.end('Bem-vindo ' + name);
})

app.get('/listar', function(request, response){
    writeLog(request, response);
    var a = fs.readFileSync('./log.txt');
    response.end(a);
})

app.get('/download', function(request, response){
    writeLog(request, response);
    response.download('./log.txt');
})