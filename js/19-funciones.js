/*Una funcion es una agrupacion reutilizable de un
conjunto de instrucciones*/

function calculadora(numero1, numero2){

    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Division: "+ (numero1/numero2));
    console.log("****************************");

    //return "Resolver operaciones matematicas";

}

//calculadora(12, 8);
//console.log(calculadora());

for(var i = 1; i <= 10; i++){
    calculadora(i, 8);
}
