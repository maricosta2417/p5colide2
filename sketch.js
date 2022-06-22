//variaveisdabolinha
let xBolinha = 300;
let yBolinha= 200;
let diametro= 15;
let raio= diametro / 2;
//velocidadebolinha
let velocidadexBolinha= 6;
let velocidadeyBolinha=6;
let raquetecomprimento=10;
let raquetealtura=90;
//variaveis da raquete
let xRaquete= 5;
let yRaquete= 150;
//variaveis do oponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150;
let velocidadeyoponente;

let colidiu = false;

//placardo jogo
let meuspontos = 0;
let pontosDooponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha();
  verificacolisaoborda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaminhaRaquete();
  //verificacolisaoRaquete();
  verificacolisaoraquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteoponente, yRaqueteoponente);
  movimentaRaqueteoponente();
  verificacolisaoraquete(xRaqueteoponente, yRaqueteoponente);
  incluiPlacar();
  marcaponto();
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
 xBolinha += velocidadexBolinha;
yBolinha += velocidadeyBolinha;

}
function verificacolisaoborda(){
 if(xBolinha + raio > width || xBolinha - raio < 0 ) { 
velocidadexBolinha *= -1;
}
if (yBolinha + raio > height || yBolinha - raio < 0 ){
  velocidadeyBolinha *= -1;
  } 
}
function mostraRaquete(x, y){
 rect(x, y,raquetecomprimento, raquetealtura); 

}
function mostraRaqueteoponente(){
 rect(xRaqueteoponente, yRaqueteoponente,raquetecomprimento, raquetealtura); 
}
function  movimentaminhaRaquete(){
  if (keyIsDown(UP_ARROW)){ 
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){ 
    yRaquete += 10;
   }
}
function verificacolisaoRaquete(){
  if(xBolinha -raio < xRaquete + raquetecomprimento && yBolinha -raio < yRaquete + raquetealtura && yBolinha + raio > yRaquete){
    
    velocidadexBolinha *= -1;
  }
}
function verificacolisaoraquete(x, y){
  colidiu=
  collideRectCircle(x, y, raquetecomprimento,raquetealtura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha*=-1;
  }

}

function movimentaRaqueteoponente(){
  velocidadeyoponente = yBolinha - yRaqueteoponente - raquetecomprimento / 2 - 30;
  yRaqueteoponente += velocidadeyoponente
}

function incluiPlacar(){
  stroke(225);
  textAlign(CENTER);
  textSize(16);
  fill(color(225, 140, 0))
  rect (150,10, 40, 20)
  fill (255)
  text(meuspontos,170, 26);
  fill(color(225, 140, 0))
  rect (450, 10, 40, 20)
  fill (255)
  text (pontosDooponente,470,26);
}

function marcaponto(){
  if (xBolinha > 590){
    meuspontos +=1;
  }
  if(xBolinha < 10){
    pontosDooponente += 1;
  }
}