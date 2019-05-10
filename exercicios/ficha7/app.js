const mysql = require('mysql')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personsdb'
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
connection.connect();

app.get('/persons', function (req, res) {
    connection.query('select * from persons', function (err, rows, fields) {
        if (err) throw err
        console.log(rows)
        res.send(rows)
    });
});

app.post('/persons', function (req, res) {
    connection.query("insert into persons values (0, 'Joana', 'França', 'PR', 28)", function (err, rows, fields) {
        if (err) throw err
        res.send(rows)
        console.log("ID inserido: " + rows.insertId);
    });
});

app.delete('/persons', function (req, res) {
    connection.query('delete from persons where id=11', function (err, rows, fields) {
        if (err) throw err
        res.send("Linhas afetadas: " + rows.affectedRows);
        console.log("Linhas afetadas: " + rows.affectedRows)
    });
});

app.get('/persons/:id', function (req, res) {
    connection.query('select * from persons where id=?', req.params.id, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    });
});

app.get('/persons/:age/:profession', function (req, res) {
    connection.query('select * from persons where age=? and profession=?', [req.params.age, req.params.profession], function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    });
});
