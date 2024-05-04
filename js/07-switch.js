var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Crisis de los cuarenta";
        break;
    case 75:
        imprime = "Eres ya de la tercera edad";
        break;
    default:
        imprime = "Tu edad es nuetral";
        break;
}

console.log(imprime);

