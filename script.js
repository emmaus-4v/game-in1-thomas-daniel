/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var Batje1X = 10; // x-positie van Batje1
var Batje1Y = 320; // y-positie van Batje1

var kogelX = 640;    // x-positie van kogel
var kogelY = 370;    // y-positie van kogel

var Batje2X = 1255;   // x-positie van Batje2
var Batje2Y = 320;   // y-positie van Batje2

var score = 0; // aantal behaalde punten

var KEY_UP1 = 87;
var KEY_DOWN1 = 83;

var KEY_UP2 = 38;
var KEY_DOWN2 = 40;


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("white");
};

/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
    fill("white");
    circle(kogelX, kogelY, 40, 40);

};

/**
 * Tekent de Batje 1 en Batje 2
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBatje1 = function(x, y) {
  fill("blue");
  rect(Batje1X, Batje2Y, 15, 100);
};

var tekenBatje2 = function(x, y) { 
    fill("red");
    rect(Batje2X, Batje2Y, 15, 100);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegBatje2 = function() {
if(keyIsDown(KEY_DOWN1)){
    Batje1Y -= 5;
}

if(keyIsDown(KEY_UP1)){
    Batje1Y += 5;
}
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegBatje1 = function() {
if(keyIsDown(40)){
    Batje2Y = Batje2Y + 5;
}
if(keyIsDown(38)){
    Batje2Y = Batje2Y - 5;
}
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkBatje2Geraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkBatje1Geraakt = function() {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {

  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond zwart, zodat je het kunt zien
  background('black');
  fill("grey");
    rect(0, 0, 1280, 7); // bovenste border
    rect(0, 713, 1280, 7); // onderste border
    rect(-1, 0, 7, 780); // linker border
    rect(1275, 0, 7, 780); // rechter border
    rect(637, 25, 7, 50); // lijntjes door midden
    rect(637, 125, 7, 50); // lijntjes door midden
    rect(637, 225, 7, 50); // lijntjes door midden
    rect(637, 325, 7, 50); // lijntjes door midden
    rect(637, 425, 7, 50); // lijntjes door midden
    rect(637, 525, 7, 50); // lijntjes door midden
    rect(637, 625, 7, 50); // lijntjes door midden
    rect(637, 725, 7, 50); // lijntjes door midden
};


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegBatje2();
      beweegKogel();
      beweegBatje1();

      if (checkBatje2Geraakt()) {
        // punten erbij
        // nieuwe Batje2 maken
      }

      if (checkBatje1Geraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe Batje1 maken
      }

      tekenVeld();
      tekenBatje2(Batje2X, Batje2Y);
      tekenKogel(kogelX, kogelY);
      tekenBatje1(Batje1X, Batje1Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}