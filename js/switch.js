//juego -> piedra, papel o tijera

/*
mecanica: 2 jugadores y cada uno puede sacar piedra, papel o tijera
-La piedra gana a la tijera
-La tijera gana al papel
-Y el papel gana a la piedra
*/


var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function game_with_switch(element1, element2) {
    switch (element1) {
        case piedra: //caso en el que jugador1 saca piedra
            switch (element2) {
                case piedra: //caso en el que jugador2 saca piedra
                    //piedra vs piedra -> empate
                    console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
                    break;
                case papel: //caso en el que jugador2 saca papel
                    //piedra vs papel -> gana papel
                    console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
                    break;
                case tijera: //caso en el que jugador2 saca tijera
                    //piedra vs tijera -> gana piedra
                    console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
                    break;
                default:
                    console.log('Introduce piedra, papel o tijera');
            }
            break;
        case papel: //caso en el que jugador1 saca papel
            switch (element2) {
                case piedra: //caso en el que jugador2 saca piedra
                    //papel vs piedra -> papel
                    console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
                    break;
                case papel: //caso en el que jugador2 saca papel
                    //papel vs papel -> empate
                    console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
                    break;
                case tijera: //caso en el que jugador2 saca tijera
                    //papel vs tijera -> gana tijera
                    console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
                    break;
                default:
                    console.log('Introduce piedra, papel o tijera');
            }
            break;
        case tijera: //caso en el que jugador1 saca tijera
            switch (element2) {
                case piedra: //caso en el que jugador2 saca piedra
                    //tijera vs piedra -> piedra
                    console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
                    break;
                case papel: //caso en el que jugador2 saca papel
                    //tijera vs papel -> tijera
                    console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
                    break;
                case tijera: //caso en el que jugador2 saca tijera
                    //tijera vs tijera -> empate
                    console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
                    break;
                default:
                    console.log('Introduce piedra, papel o tijera');
            }
            break;
        default:
            console.log('Introduce piedra, papel o tijera');
    }
}

console.log('-----------------------------------------------');
console.log('SWITCH');
console.log('JUGADOR1 VS JUGADOR2');
console.log('---------CASOS EN LOS QUE HAY EMPATE---------');
game_with_switch(piedra, piedra);
game_with_switch(papel, papel);
game_with_switch(tijera, tijera);

console.log('---------CASOS EN LOS QUE GANA JUGADOR1---------');
game_with_switch(piedra, tijera);
game_with_switch(papel, piedra);
game_with_switch(tijera, papel);

console.log('---------CASOS EN LOS QUE GANA JUGADOR2---------');
game_with_switch(piedra, papel);
game_with_switch(tijera, piedra);
game_with_switch(papel, tijera);

//INTRODUCE TU FUNCION EN CONSOLA
console.log('---------INTRODUCE TU FUNCION EN CONSOLA---------');
console.log('Inserta: game_with_switch(element1, element2) siendo element1 y element2 piedra, papel o tijera');