const express = require('express');
const bodyParser = require ('body-parser');
const uuid = require ('uuid/v1');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var uui = uuid();

const port = 3000
const fs = require('fs')

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// app.get('/users', function(req, res){
//     res.send(readFile("./persons.json"));
// });

// post
app.post('/users', function(req, res) {
    var obj=JSON.parse(readFile('./persons.json'));
    obj['person'+obj.length] = req.body;
    console.log(obj['person6']);
    res.send(obj);
});

app.delete('/users/:id', function(req, res){
    var obj = JSON.parse(readFile('./persons.json'));
    delete obj['person' + req.params.id];
    res.send(obj);
});

app.get('/users/:id', function(req, res){
    var obj = JSON.parse(readFile('./persons.json'));
    res.send(obj['person' + req.params.id]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));