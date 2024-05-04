//Condicional if

var edad = 18;
var nombre = "David Suarez";

if(edad >= 18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    if(edad == 18){
        console.log("Eres generacion Z")
    }
    else if(edad >= 70){
        console.log("Eres de tercera edad");
    }
    else{
        console.log("No eres milenial");
    }
}
else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

//Operadores logicos

var year = 2021;
if(year != 2018){
    console.log("El año no es 2018, realmente es "+year);
}

if(year >= 2000 && year <=2022){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

if( year == 2011 || (year == 2021 &&  year < 2028)){
    console.log("El año acaba en 1");
}