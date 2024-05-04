var texto = "Hola mundo, variable global";
var numero = 12;

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

holaMundo(texto);
console.log(hola_mundo);