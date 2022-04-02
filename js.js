var cuerpo;

/** MOVIMIENTOS */
function hanoi(n, ori, des, aux) {
  if (n == 1)
    document.write(
      "Mueva el disco " +
        n +
        "desde la Torre " +
        ori +
        " hasta la Torre " +
        des +
        "<br/> "
    );
  else {
    hanoi(n - 1, ori, aux, des);
    document.write(
      "Mueva el disco " +
        n +
        "desde la Torre " +
        ori +
        " hasta la Torre " +
        des +
        "<br/> "
    );
    hanoi(n - 1, aux, des, ori);
  }
}

/** HISTORIAL DE MOVIMIENTOS AL RESOLVER */

resolver(3, "A", "C", "B");

function resolver(disk, start, destination, staging) {
  if (disk == 1) {
    // base case of 1 disk, we know how to solve that
    document.write(") Mover de " + start + " a " + destination + ".<br/>");
  } else {
    // first solve for 6 disks (i.e., disk - 1)
    resolver(disk - 1, start, staging, destination);

    // now move the 7th disk
    document.write(") Mover de " + start + " a " + destination + ".<br/>");

    // now solve for the 6 disks from post B to post C
    resolver(disk - 1, staging, destination, start);
  }
}

/* function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    console.log("n :>> ", n);
    return countArray;
  }
}
countup(5);
 */

/** RESET */
function resetJuego() {
  document.getElementById("juegoContenedor").reset();
}

/**---------------------------------------------CANVAS--------------------------------------------------------- */

function graficos() {
  let canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    let rectangulo = canvas.getContext("2d");

    /** LETRAS */
    letras();
    /** PALOS */
    palos();
    //**DISCOS */
    discos();
  }
}

function reset() {
  canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    lienzoreset = canvas.getContext("2d");
    lienzoreset.fillStyle = "white";
    lienzoreset.fillRect(0, 0, canvas.width, canvas.height);
  }
  palos();
  letras();
}

function letras() {
  let canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    let rectangulo = canvas.getContext("2d");

    rectangulo.font = "bold 18px Arial";
    rectangulo.fillText("A", 45, 20, 10, 130);
    rectangulo.fillText("B", 145, 20, 10, 130);
    rectangulo.fillText("C", 245, 20, 10, 130);
  }
}

function palos() {
  let canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    let rectangulo = canvas.getContext("2d");

    rectangulo.fillStyle = "#f0e68c";
    rectangulo.fillRect(45, 30, 10, 130); //Distancia desde Izquierda, distancia desde arriba, grosor desde izquierda a la derecha, largura desde arriba hasta abajo
    rectangulo.fillRect(145, 30, 10, 130);
    rectangulo.fillRect(245, 30, 10, 130);
  }
}

function discos() {
  let canvas = document.getElementById("rectangulo");
  if (canvas.getContext) {
    let disco1 = canvas.getContext("2d");

    /** DISCO1*/
    disco1.fillStyle = "green";
    disco1.fillRect(5, 130, 92, 20); //el disco mide 90

    /** DISCO2*/
    disco1.fillStyle = "yellow";
    disco1.fillRect(13, 110, 75, 20); //el disco mide 80

    /** DISCO3*/
    disco1.fillStyle = "red";
    disco1.fillRect(21, 90, 58, 20); //el disco mide 70

    /** DISCO4*/
    disco1.fillStyle = "purple";
    disco1.fillRect(29, 70, 42, 20); //el disco mide 60

    /** DISCO5*/
    disco1.fillStyle = "blue";
    disco1.fillRect(37, 50, 25, 20); //el disco mide 50
  }
}

window.addEventListener("load", graficos); //cargamos la página con los gráficos al comenzar
