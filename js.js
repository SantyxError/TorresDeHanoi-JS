window.addEventListener("load", palos);

let paloA = 11;
let paloB = 111;
let paloC = 211;
let colorDiscos = ["#012a4a", "#01497c", "#2a6f97", "#468faf", "#89c2d9"];
let mensaje = "";
let cont = 1;

//FUNCION RESOLVER -> Resuelve el rommpecabezas
function resolver() {
  let origen = document.getElementById("Origen").value;
  let destino = document.getElementById("Destino").value;
  let discos = document.getElementById("NumDiscos").value;

  if (origen == destino || origen == "elige..." || destino == "elige...") {
    alert("Movimiento no Permitido");
  } else {
    let auxiliar = aux(origen, destino);
    mensaje = "";
    cont = 1;
    hanoi(discos, origen, destino, auxiliar);
    juegoResuelto();
  }
}

//FUNCION AUXILIAR
function aux(origen, destino) {
  let auxiliar;

  if (origen == "A" && destino == "B") {
    auxiliar = "C";
  } else if (origen == "A" && destino == "C") {
    auxiliar = "B";
  } else {
    auxiliar = "A";
  }

  return auxiliar;
}

//FUNCION HANOI -> Calcula los movimientos necesarios para resolver el rompecabezas. Esta función necesita cuatro parámetros de entrada: número de discos, poste origen, poste auxiliar y poste destino.
function hanoi(discos, origen, destino, auxiliar) {
  if (discos == 1) {
    mensaje +=
      "<br>" +
      cont +
      ") Mover disco del palo " +
      origen +
      " al palo " +
      destino;
    cont++;
  } else {
    hanoi(discos - 1, origen, auxiliar, destino);
    mensaje +=
      "<br>" +
      cont +
      ") Mover disco del palo " +
      origen +
      " al palo " +
      destino;
    cont++;
    hanoi(discos - 1, auxiliar, destino, origen);
  }
  document.querySelector("#movimientos").innerHTML = mensaje;
}

// FUNCIÓN DE ORIGEN
function juegoInicio() {
  let origen = document.getElementById("Origen").value;
  let discos = document.getElementById("NumDiscos").value;

  if (origen == "A") {
    discosPosicion(discos, paloA);
  }
  if (origen == "B") {
    discosPosicion(discos, paloB);
  }
  if (origen == "C") {
    discosPosicion(discos, paloC);
  }
  if (origen == "elige...") {
    limpiarRectangulo();
  }
}

//FUNCIÓN DEL JUEGO RESUELTO
function juegoResuelto() {
  let destino = document.getElementById("Destino").value;
  let discos = document.getElementById("NumDiscos").value;

  if (destino == "A") {
    discosPosicion(discos, paloA);
  }
  if (destino == "B") {
    discosPosicion(discos, paloB);
  }
  if (destino == "C") {
    discosPosicion(discos, paloC);
  }
}

//DIBUJO DE LOS DISCOS
function discosPosicion(num, palo) {
  let altura = 130;
  let colocacion = 0;
  let anchura = 80;
  limpiarRectangulo();
  for (i = 0; i < num; i++) {
    let canvas = document.getElementById("rectangulo");
    if (canvas.getContext) {
      let rectangulo = canvas.getContext("2d");

      rectangulo.fillStyle = colorDiscos[i];
      rectangulo.fillRect(palo + colocacion, altura, anchura, 20);

      colocacion += 5;
      altura -= 20;
      anchura -= 10;
    }
  }
}

//DIBUJO DE LOS PALOS
function palos() {
  let canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    let rectangulo = canvas.getContext("2d");

    rectangulo.font = "bold 18px Arial";
    rectangulo.fillStyle = "black";
    rectangulo.fillText("A", 45, 20, 10, 130); //Distancia desde Izquierda, distancia desde arriba, grosor desde izquierda a la derecha, largura desde arriba hasta abajo
    rectangulo.fillText("B", 145, 20, 10, 130);
    rectangulo.fillText("C", 245, 20, 10, 130);

    rectangulo.fillStyle = "#ffd166";
    rectangulo.fillRect(45, 30, 10, 130);
    rectangulo.fillRect(145, 30, 10, 130);
    rectangulo.fillRect(245, 30, 10, 130);
  }
}

//FUNCiÓN RESET -> limpiaremos todo el canvas

function limpiarRectangulo() {
  let canvas = document.getElementById("rectangulo");

  if (canvas.getContext) {
    let rectangulo = canvas.getContext("2d");
    rectangulo.clearRect(0, 0, 300, 150);
    palos();
  }
}

function reset() {
  document.getElementById("NumDiscos").value = 3;
  document.getElementById("Origen").value = "elige...";
  document.getElementById("Destino").value = "elige...";
  document.querySelector("#movimientos").innerHTML = "";
  limpiarRectangulo();
  cont = 1;
}
