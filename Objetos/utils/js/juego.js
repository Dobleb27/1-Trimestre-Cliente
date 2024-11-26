let palos = ["C", "D", "T", "P"];
let valores = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let nombreJugador = prompt("Nombre del jugador:");
let baraja = [];

for (let i = 0; i < palos.length; i++) {
  //C T R P
  for (let j = 0; j < valores.length; j++) {
    baraja.push(new carta(valores[j] + palos[i]));
  }
}

baraja = _.shuffle(baraja); //Modo aleatorio para barajar
console.log(baraja);
let acabar = true;

//Empezar a jugar
//Pop quita el ultimo elemento y lo retorna

let cuentaBanca = 0;
let cuentaBancaP = document.querySelector("#parrafoBanca");
let imagin = document.querySelector("#imagenees");

setTimeout(() => {
  while (cuentaBanca < 17) {
    let carta = baraja.pop();
    imagin.src = `imagenes${carta.imagen}`;
    cuentaBanca += carta.valor;
    cuentaBancaP.textContent = cuentaBanca;
  }
}, 100);

//Ahora le toca al jugar

let cuentaJugador = 0;
let botonPedir = document.querySelector("#pedir");
let imageeeeeen = document.querySelector("#imageneesjugador");
let cuentaJuugador = document.querySelector("#parrafoJugadord");

botonPedir.addEventListener("click", (event) => {
  let carta = baraja.pop();
  imageeeeeen.src = `imagenes${carta.imagen}`;
  cuentaJugador += carta.valor;
  cuentaJuugador.textContent = cuentaJugador;
});

let botonPlantarse = document.querySelector("#plantarse");

botonPlantarse.addEventListener("click", (event) => {
  if (cuentaBanca > 21) {
    alert("La banca se pasa, el jugador gana!!!");
  } else if (cuentaBanca < 22 && cuentaJugador > 21) {
    alert("La banca gana!");
  } else if (cuentaBanca >= cuentaJugador) {
    alert("La banca gana!");
  }

  terminarJuego();
});

function terminarJuego() {
  // Mostrar mensaje de fin del juego
  alert(
    "El juego ha terminado. La página se recargará para comenzar de nuevo."
  );
  // Recargar la página
  location.reload();
}
