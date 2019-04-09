// var obj = {
//     name: "John",
//     age: "45",
//     gender: "male"
// }

// var str = JSON.stringify(obj);

// console.log(str);

// var strjson = JSON.parse(str);

// console.log(strjson);

var Emitter = require("./emitter.js");

Emitter('start', function() {
    console.log("Hello world!");
})