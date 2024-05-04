/*Hacer un programa que muestre todos los numeros entre dos
numeros introducidos por el usuario*/

var numero1 = parseInt(prompt("Introduce el numero 1:"));
var numero2 = parseInt(prompt("Introduce el numero 2:"));

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>");
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}