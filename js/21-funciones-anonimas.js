var pelicula = function(nombre){
    return "La pelicula es: "+ nombre;
}

pelicula("Avengers");

function sumar(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1 + numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumar(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por do es: ", (dato*2));
});

sumar(5, 7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por do es: ", (dato*2));
});
