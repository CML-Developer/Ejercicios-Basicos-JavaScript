/*Programa que muestre todos los numeros divisores de
un numero introducido por el usuario*/

var numero = parseInt(prompt("Introduce nu numero"));

for(var i = 0; i <= numero; i++){
    if(numero % i == 0){
        console.log("Divisor: "+i);
    }
}