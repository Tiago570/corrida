function setup() {
  createCanvas(400, 400);
}
let xsigma = 340;
let xbraian = 340;
let xairtondebicicleta = 340;
let xmurillo = 340;
function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}
function ativaJogo() {
  if (focused == true) {
    background("#86C73A");
  } else {
    background("rgb(68,152,214)");
  }
}
function desenhaJogadores() {
  textSize(55);
  text("🗿", xsigma, 50);
  textSize(55);
  text("🧑‍🦽", xmurillo, 350);
  textSize(55);
  text("🚴", xairtondebicicleta, 250);
  textSize(55);
  text("🏃", xbraian, 150);}
function desenhaLinhaDeChegada(){
  rect(50, 0, 10, 400);
}
 function verificaVencedor(){ if (xsigma < 50) {
    text("mogged🧏", 60, 200);
    noLoop();
  }
  if (xbraian < 50) {
    text("banda do eloy🙅", 7, 200);
    noLoop();
  }
  if (xairtondebicicleta < 50) {
    textSize(25);
    text("meu pai fazia essa magica cmg", 5, 200);
    noLoop();
  }
  if (xmurillo < 50) {
    text("Bazinga!", 60, 200);
    noLoop();

  }

}

function keyReleased() {
  if (key == "a") {
    xairtondebicicleta += random(-40);
  }
  if (key == "e") {
    xbraian += random(-40);
  }
  if (key == "b") {
    xmurillo += random(-40);
  }
  if (key == "s") {
    xsigma += random(-40);
  }
}
