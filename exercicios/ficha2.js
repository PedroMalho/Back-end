function imc(peso,altura) {
    var  indice = peso/(altura^2);
    console.log(indice);
    if (indice < 18.5){
        return "Abaixo do peso.";
    } else if (indice >= 18.5 && indice < 25) {
        return "No peso normal.";
    } else if (indice >= 25 && indice <= 30) {
        return "Acima do peso.";
    } else {
        return "Obeso.";
    }
}

console.log(imc(70,1.7));


function inversa(frase) {
    var strSplitted = frase.split(' ');
    var frase_inv = "";
    for (var i= 0; i < strSplitted.length; i++) {
        var palavra_inv = "";
        var word = strSplitted[i];
        for (var j = word.length - 1; j >= 0; j--) {
            palavra_inv += word[j];
        }
        frase_inv += palavra_inv + " ";
    }
    return frase_inv;  
}

console.log(inversa('Hoje e Domingo'))


function repete(frase, letra) {
    var lower = frase.toLowerCase();
    var i = 1;
    var j = 0;
    while ( i <= frase.length) {
        if ( lower[lower.length - i] == letra) {
            j++;
        }
        i++;
    }
    var res = 'A letra "' + letra + '" repete-se ' + j + ' vezes.'
    return res;
}

console.log(repete('HOje e Domingo', 'o'))


function vogais(frase) {
    var lower = frase.toLowerCase();
    var numvogais = 0;
    for ( var i = 0; i < lower.length; i++) {
        if (lower[i] == 'a' || lower[i] == 'e' || lower[i] == 'i' || lower[i] == 'o' || lower[i] == 'u')
        numvogais++;
    }
    var res = 'A frase contem ' + numvogais + ' vogais.'
    return res;
}

console.log(vogais('Hoje e domingo'))


// function horas(entrada, saida) {
//     var entra = entrada.split(':');
//     var sai = saida.split(':');
//     var tempo = '';
//     for ( var i = 0; i < entra.length; i++) {
//         var calculo = sai[i] - entra[i];
//         tempo += calculo + ":";
//     }
//     var t = tempo.split(":");
//     var res = "Trabalhou " + Math.abs(t[0]) + " hora(s) " + Math.abs(t[1]) + " minuto(s) e " + Math.abs(t[2]) + " segundo(s)."
//     return res;
// }

function horas(entrada, saida) {
    var entra = entrada.split(":");
    var sai = saida.split(":");
    var entra_sec = 0;
    var sai_sec = 0;
    for (var i = 0; i < entra.length; i++) {
        if (i == 0) {
            entra_sec = entra[i] * 3600;
            sai_sec = sai[i] * 3600; 
        } else if ( i == 1) {
            entra_sec += entra[i] * 60;
            sai_sec += sai[i] * 60;
        } else {
            entra_sec += entra[i]*1;
            sai_sec += sai[i]*1;
        }
    }
    var tempo_trabalho = sai_sec - entra_sec;
    console.log(tempo_trabalho)
    var horas = tempo_trabalho / 3600;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = ( minutos - Math.floor(minutos)) * 60;
    var texto = "Trabalhou " + Math.floor(horas) + " horas e " + Math.round(minutos) + " minutos e " + Math.round(segundos) + " segundos." ;
    return texto
}

console.log(horas('08:45:30', '17:55:15'))


function desenha(altura, largura) {
    var linha = '';
    var j = 0;
    while ( j < altura ) {
        for ( var i = 0; i < largura; i++) {
            linha += '*';
        }
        linha += "\n";
        j++;
    }
    return linha;
}

console.log(desenha(10, 20))


// function triangulo(altura) {  NAO ACABADO
//     var linha = '';
//     while (altura > 0) {
//         linha += '*';
//         altura--;
//     }
//     linha += "\n";
//     return linha;
// }

// console.log(triangulo(10))
