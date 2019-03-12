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


