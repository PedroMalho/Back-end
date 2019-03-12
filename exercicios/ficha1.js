function notafinal (notaP, notaT) {
    var c = (notaP + notaT) / 2;
    if (c >= 10) {
        return("Aprovado");
    }
    else {
        return("Reprovado");
    }
}

//console.log(notafinal(10, 10));


function mes (mesN) {
    switch(mesN) {
        case 1:
            return("Janeiro");
            break;
        case 2:
            return("Fevereiro");
            break;
        case 3:
            return("Março");
            break;
        case 4:
            return("Abril");
            break;
        case 5:
            return("Maio");
            break;
        case 6:
            return("Junho");
            break;
        case 7:
            return("Julho");
            break;
        case 8:
            return("Agosto");
            break;
        case 9:
            return("Setembro");
            break;
        case 10:
            return("Outubro");
            break;
        case 11:
            return("Novembro");
            break;
        case 12:
            return("Dezembro");
            break;
    }
}

//console.log(mes(7));


function resultado (num1, num2, op) {
    switch(op) {
        case "+":
            res = num1 + num2;
            return(res);
            break;
        case "-":
            res = num1 - num2;
            return(res);
            break;
        case "*":
            res = num1 * num2;
            return(res);
            break;
        case "/":
            res = num1 / num2;
            return(res);
            break;
        case "^":
            res = Math.pow(num1, num2);
            return(res);
            break;
    }
} 

//console.log(resultado(2,4,"^"));


function multiplos (num) {
    var i = 1;
    var res = 0;
    while (res < 20){
        res = num * i;
        i = i + 1;
        return res;
    }
}

//console.log(multiplos(5));


function soma(num) {
    res = (num/2)*(1+num);
    return res;
}

// function soma(num) {
//     var i = 1;
//     res = 0;
//     while (i <=100){
//         res = res + i;
//         i = i + 1;
//     }
//     return res;
// }

console.log(soma(100));


function factorial(num) {
    var res = num;
    while (num > 1) {
        num = num - 1;
        res = res * num;
    }
    return res;
}

console.log(factorial(5));


function max(array){
    var m = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > m) {
            m = array[i];
        }
    }
    return m;
}

function min(array){
    var m = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < m) {
            m = array[i];
        }
    }
    return m;
}

function media(array){
    var i = 0;
    var res = 0;
    while ( i < array.length) {
        res = res + array[i];
        i = i + 1;
    }
    var med = res / array.length;
    return med;
}

console.log(media([4,3,2,1]));
