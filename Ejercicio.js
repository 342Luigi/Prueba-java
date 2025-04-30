//Ejercicio numero 1: 
//Realizar un juego de *piedra, papel o tijera*. Para este juego, vas a necesitar funciones. 
//Se va a utilizar funciones _(utilizar la función prompt para pedir datos al primer jugador y luego al segundo jugador)_. 
////Se va a tener que determinar el resultado de la partida, es decir, Quien gana, si se empata o si se pierde. 
//Se tendrá que evaluar el resultado de la partida. 

//*Nota: la función debe llamarse JUGAR y debe tener como parámetro, Opción 1, Opción 2.

/*
prompt
let jugar = prompt("Introduce piedra, papel o tijera:");
*/
function jugar(Opcion1, Opcion2){
    if((Opcion1 || Opcion2 !==("piedra" || "papel" || "tijera"))){
        console.log("Error");
    }
    else if (Opcion1 === Opcion2){
        console.log("Empate")
    }
    
    else if ((Opcion1 === "piedra" && Opcion2 === "papel") || (Opcion1 === "tijera" && Opcion2 === "piedra") || (Opcion1 === "papel" && Opcion2 === "tijera"))  {
        console.log("Gana el jugador 2");
    } 
    else {
        console.log("Gana el jugador 1");
    } 
}

let jugar1 = prompt("Introduce piedra, papel o tijera:");
let jugar2 = prompt("Introduce piedra, papel o tijera:");

jugar(jugar1, jugar2);

