/*Programa que pida dos numeros y diga cual es 
el mayor, el menor o si son iguales*/

var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero"));
    numero2 = parseInt(prompt("Introduce el segundo numero"));
}

if(numero1 == numero2){
    alert("Los numeros son iguales");
}
else if(numero1 > numero2){
    alert("El numero mayor es: "+numero1);
    alert("El numero menor es: "+numero2);
}
else if(numero2 > numero1){
    alert("El numero mayor es: "+numero2);
    alert("El numero menor es: "+numero1);
}
else{
    alert("Introduce numeros correctos");
}