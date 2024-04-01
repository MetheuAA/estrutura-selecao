//Questão 7: Como você pode usar uma declaração if, else if, else para verificar se um número é múltiplo de 2, 3 ou 5 em JavaScript?
var numero = 12;

if ( numero %2 === 0) {
    console.log("Multiplo de 2");
    } else if (numero %3 === 0){
        console.log("Multiplo de 3");
    }
    else {(numero %5 === 0);
        console.log("Multiplo de 5");
    }