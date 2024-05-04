//Calculadora

var numero1 = parseInt(prompt("Introduce el numero 1"));
var numero2 = parseInt(prompt("Introduce el numero 2"));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el numero 1"));
    numero2 = parseInt(prompt("Introduce el numero 2"));
}

var resultado = "La suma es: "+(numero1 + numero2)+" <br/>"+
                "La resta es: "+(numero1 - numero2)+" <br/>"+
                "La multiplicacion es: "+(numero1 * numero2)+" <br/>"+
                "La division es: "+(numero1 / numero2)+" <br/>";

var resultado1 = "La suma es: "+(numero1 + numero2)+" \n"+
                "La resta es: "+(numero1 - numero2)+" \n"+
                "La multiplicacion es: "+(numero1 * numero2)+" \n"+
                "La division es: "+(numero1 / numero2)+" \n";

var resultadoCMD = "La suma es: "+(numero1 + numero2)+" \n"+
                "La resta es: "+(numero1 - numero2)+" \n"+
                "La multiplicacion es: "+(numero1 * numero2)+" \n"+
                "La division es: "+(numero1 / numero2)+" \n";

document.write(resultado);        
alert(resultado1) 
console.log(resultadoCMD); 