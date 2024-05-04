//Conseguir elementos con un ID concreto

var caja = document.getElementById("caja");
caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "blue";
caja.style.color = "white";
caja.style.padding = "15px";
console.log(caja);

var caja1 = document.querySelector("#caja");
caja.style.border = "5px solid purple";
console.log(caja1);

//Conseguir elementos por si etiqueta

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2].textContent;
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
console.log(contenidoEnTexto);

var valor;
for(valor in todosLosDivs){
    if( typeof todosLosDivs[valor].textContent == "string"){
        var seccion = document.querySelector("#seccion");
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

//Conseguir elementos por su clase

var divsAmarillos = document.getElementsByClassName("amarillo");
var divsRojos = document.getElementsByClassName("rojo");

var div;
for(div in divsAmarillos){
    if(divsAmarillos[div].className == "amarillo"){
        divsAmarillos[div].style.background = "yellow";
        divsAmarillos[div].style.margin = "5px";
    }
}

for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
        divsRojos[div].style.margin = "5px";
    }
}

