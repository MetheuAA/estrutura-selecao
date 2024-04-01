//Questão 9: Como você pode usar uma declaração if, else if, else para classificar um triângulo em equilátero, isósceles ou escaleno com base em seus lados em JavaScript? 
var lado1 = 1;
var lado2 = 2;
var lado3 = 3;
if ( lado1 === lado2 && lado2 === lado3) {
console.log("Triangulo equilatero");
} else if (lado2 === lado1 && lado1 !== lado3){
    console.log("Triangulo isóceles");
}
else {(lado3 === lado1 && lado2 !== lado3);
    console.log("Triangulo escalano");
}