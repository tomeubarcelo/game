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
    if (element1 == element2) {
        console.log('Hemos quedado empate. ' + element1 + ' vs. ' + element2);
    } else if ((element1 == piedra && element2 == tijera) || (element1 == papel && element2 == piedra) || (element1 == tijera && element2 == papel)) {
        console.log('Gana el jugador1 porque ha sacado ' + element1 + ' y el jugador 2 ' + element2);
    } else {
        console.log('Gana el jugador2 porque ha sacado ' + element2 + ' y el jugador 1 ' + element1);
    }
}

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