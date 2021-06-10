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

var Batje1X = 200; // x-positie van Batje1
var Batje1Y = 100; // y-positie van Batje1

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var Batje2X = 0;   // x-positie van Batje2
var Batje2Y = 0;   // y-positie van Batje2

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
 * Tekent de Batje2
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBatje2 = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de Batje1
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBatje1 = function(x, y) {
  fill("blue");
  rect(10, 10, 25, 125);
};

var tekenBatje2 = function(x, y) {
  fill("red");
  rect(x, y, 25, 125);


/**
 * Updatet globale variabelen met positie van Batje2 of tegenBatje1
 */
var beweegBatje2 = function() {
    if (keyIsDown(KEY_UP2)){
        y = y + 1;
    }

    if (keyIsDown(KEY_DOWN2)){
        y = y - 1;
    }

};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele Batje1X en Batje1Y
 */
var beweegBatje1 = function() {
    if (keyIsDown(KEY_UP1)) {
        Batje1Y = y + 1;
    }

    if (keyIsDown(KEY_DOWN1)) {
        Batje1Y = y - 1;
    }

};


/**
 * Zoekt uit of de Batje2 is geraakt
 * @returns {boolean} true als Batje2 is geraakt
 */
var checkBatje2Geraakt = function() {

  return false;
};


/**
 * Zoekt uit of de Batje1 is geraakt
 * bijvoorbeeld door botsing met Batje2
 * @returns {boolean} true als Batje1 is geraakt
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

  // Kleur de achtergrond grijs, zodat je het kunt zien
  background('black');

}


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
}