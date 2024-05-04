/*Mostrar todos los numeros impares que hay entre dos
numeros introducidos por usuario*/

var numero1 = parseInt(prompt("Introduce el numero 1:"));
var numero2 = parseInt(prompt("Introduce el numero 2:"));

while(numero1 < numero2){
    numero1++;

    if(numero1 % 2 != 0){
        console.log("El "+numero1+" es impar");
    }
}