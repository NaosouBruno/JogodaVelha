var jogadaor,
  vencedor = null;
var jogadorSelecionado = document.querySelector("#jogador-selecionado");
var vencedorSelecionado = document.querySelector("#vencedor-selecionado");
var quadrados = document.querySelector(".quadrado");
mudarJogador("X");
var velha = false;

function escolherQuadrado(id) {
  if (vencedor !== null && velha === false) {
    return;
  }
  var quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== "-") {
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = `#008`;

  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  mudarJogador(jogador);
  checarVencedor();
  /* deuVelha(); */
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
  var quadrado1 = document.getElementById("1");
  var quadrado2 = document.getElementById("2");
  var quadrado3 = document.getElementById("3");
  var quadrado4 = document.getElementById("4");
  var quadrado5 = document.getElementById("5");
  var quadrado6 = document.getElementById("6");
  var quadrado7 = document.getElementById("7");
  var quadrado8 = document.getElementById("8");
  var quadrado9 = document.getElementById("9");
  deuVelha(
    quadrado1,
    quadrado2,
    quadrado3,
    quadrado4,
    quadrado5,
    quadrado6,
    quadrado7,
    quadrado8,
    quadrado9
  );
  if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCor(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }
  if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCor(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }
  if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCor(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }
  if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCor(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }
  if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCor(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }
  if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCor(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }
  if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCor(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }
  if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCor(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;
  }
  if (velha == true) {
    pintarVelha();
  }
}
function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}
function mudarCor(q1, q2, q3) {
  q1.style.background = "#0f0";
  q2.style.background = "#0f0";
  q3.style.background = "#0f0";
}
function checarSequencia(q1, q2, q3) {
  var igual = false;
  if (
    q1.innerHTML !== "-" &&
    q1.innerHTML === q2.innerHTML &&
    q2.innerHTML === q3.innerHTML
  ) {
    igual = true;
  }
  return igual;
}
function deuVelha(q1, q2, q3, q4, q5, q6, q7, q8, q9) {
  console.log(velha);
  if (
    q1.innerHTML !== "-" &&
    q2.innerHTML !== "-" &&
    q3.innerHTML !== "-" &&
    q4.innerHTML !== "-" &&
    q5.innerHTML !== "-" &&
    q6.innerHTML !== "-" &&
    q7.innerHTML !== "-" &&
    q8.innerHTML !== "-" &&
    q9.innerHTML !== "-"
  ) {
    velha = true;
  } else {
    return;
  }
}

function reinciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = "";
  velha = false;
  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = "#eee";
    quadrado.style.color = "#eee";
    quadrado.innerHTML = "-";
  }
  mudarJogador("X");
}
function pintarVelha() {
  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = "red";
  }
}
