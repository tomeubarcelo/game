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

function game(element1, element2) {
    if (element1 == piedra) { //jugador 1 saca piedra
        if (element2 == piedra) { //jugador 2 saca piedra
            console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
        } else if (element2 == papel) { //jugador 2 saca papel
            console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
        } else { //jugador 2 saca tijera
            console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
        }
    } else if (element1 == papel) { //jugador 1 saca papel
        if (element2 == piedra) { //jugador 2 saca piedra
            console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
        } else if (element2 == papel) { //jugador 2 saca papel
            console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
        } else { //jugador 2 saca tijera
            console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
        }
    } else { //jugador 1 saca tijera
        if (element2 == piedra) { //jugador 2 saca piedra
            console.log('Gana jugador2: ' + element1 + ' vs. ' + element2);
        } else if (element2 == papel) { //jugador 2 saca papel
            console.log('Gana jugador1: ' + element1 + ' vs. ' + element2);
        } else { //jugador 2 saca tijera
            console.log('Hemos quedado empate: ' + element1 + ' vs. ' + element2);
        }
    }
}

console.log('IF');
console.log('JUGADOR1 VS JUGADOR2');
//casos empate
console.log('---------CASOS EN LOS QUE HAY EMPATE---------');
game(piedra, piedra);
game(papel, papel);
game(tijera, tijera);

//casos en los que gana el jugador1
console.log('---------CASOS EN LOS QUE GANA JUGADOR1---------');
game(piedra, tijera);
game(papel, piedra);
game(tijera, papel);

//casos en los que gana el jugador2
console.log('---------CASOS EN LOS QUE GANA JUGADOR2---------');
game(tijera, piedra);
game(piedra, papel);
game(papel, tijera);

//INTRODUCE TU FUNCION EN CONSOLA
console.log('---------INTRODUCE TU FUNCION EN CONSOLA---------');
console.log('Inserta: game(element1, element2) siendo element1 y element2 piedra, papel o tijera');