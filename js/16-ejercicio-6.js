/*Programa que nos diga si un numero es par o impar*/

var numero = parseInt(prompt("Introduce un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero"));
}

if(numero % 2 == 0){
    alert("Es un numero par");
}
else{
    alert("Es un numero impar");
}