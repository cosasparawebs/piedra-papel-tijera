function computadora(){
    let opciones = ["piedra", "papel", "tijera"];
    opcionComputadora = opciones[Math.floor(Math.random()*opciones.length)];
    return opcionComputadora;
}

let puntosJugador =  0;
let puntosComputadora = 0;

function partida(turnoJugador, turnoComputadora) {
    if(turnoJugador === turnoComputadora){
        console.log("EMPATE");
    } else if(turnoJugador == "piedra" && turnoComputadora == "papel"){
        ++puntosComputadora;
        console.log("PERDISTE: Papel envuelve a piedra");
    } else if (turnoJugador == "piedra" && turnoComputadora == "tijera"){
        ++puntosJugador;
        console.log("GANASTE: Piedra rompe la tijera");
    }else if(turnoJugador == "papel" && turnoComputadora == "piedra"){
        ++puntosJugador;
        console.log("GANASTE: Papel envuelve a piedra");
    } else if(turnoJugador == "papel" && turnoComputadora == "tijera"){
        ++puntosComputadora;
        console.log("PERDISTE: Tijera corta el papel");
    } else if(turnoJugador == "tijera" && turnoComputadora == "papel"){
        ++puntosJugador;
        console.log("GANASTE: Tijera corta el papel");
    } else if(turnoJugador == "tijera" && turnoComputadora == "piedra"){
        ++puntosComputadora;
        console.log("PERDISTE: Piedra rompe la tijera");
    } else{
        console.log("Ingresa obejto valido")
    }
}
for (round = 0; round < 5; round++) {
    let turnoJugador = prompt("¿Piedra, papel o tijera?").toLowerCase()
    let turnoComputadora = computadora()
    console.log(partida(turnoJugador, turnoComputadora)) 
    
 
 

    if(turnoJugador == "piedra" || turnoJugador == "tijera" || turnoJugador == "papel"){
        console.log("Elejiste " + turnoJugador + ", y la Compu " + turnoComputadora)
    } else{
        console.log("Nadie gana")
    }
}

console.log("RESULTADOS: Tu puntaje: " + puntosJugador + ", Computadora: " + puntosComputadora)




