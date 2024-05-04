//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Resto de frutas: ", resto_de_frutas);
}

listadoFrutas("Naranaja", "Manzana", "Sandia", "Pera", "Melon","Coco");

var frutas = ["Naranaja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon","Coco");