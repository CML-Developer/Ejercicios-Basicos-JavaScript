//Tabla de multiplicar de un numero introducido

var numero = parseInt(prompt("¿De que numero quieres la tabla?"));

document.write("<h1>Tabla del "+numero+"</h1>")
for(var i = 0; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

//Todas las tablas

for(var c = 0; c <= 10; c++){
    document.write("<h1>Tabla del "+c+"</h1>")
    for(var i = 0; i <= 10; i++){
    document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}