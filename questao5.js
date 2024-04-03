//Questão 5: Como você pode usar uma declaração if, else if, else para verificar se um número é par, ímpar ou zero em JavaScript?
var numero = 0;

if ( numero === 0) {
    console.log("É zero");
}
else if (numero %2 !== 0){
    console.log("É impar");
}
else {
    console.log("É par");
}

