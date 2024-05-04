var nonbre = "Juanito Perez";
var nombres = ["Juanito Perez", "Juan Lopez", "Manolo Garcia", "Jose martin"];
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

console.log(nombres[0]);
console.log(lenguajes.length);

var elemento = parseInt(prompt("¿Que elemento del array quieres?"));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto, menor que "+nombres.length);
}
else{
    alert("El usuario seleccionado es "+nombres[elemento]);
}

document.write("<h1>Lenguajes de programacion del 2021</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");

document.write("<ul>");
lenguajes.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");

document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");
