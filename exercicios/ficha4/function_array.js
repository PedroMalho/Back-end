var array = [
    function() { 
        return "Hello World";
    },
    function() { 
        return "Hello world 2";
    },
    function() { 
        return "Hello world 3";
    }
];

// console.log(array[0](),array[1](),array[2]());

for (var i = 0; i < 3; i++) {
    console.log(array[i]());
};

array.forEach(function(element) {
    console.log(element());
});