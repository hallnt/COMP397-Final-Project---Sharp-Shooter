/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822 
+++ Last Modified By: Teleisha Hall 
+++ Date Last Modified - August 1, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework 
+++ Version: 1
+++ Revision History: 
-----------------------------------------------------------------------------------------------------------*/
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/*---------------------------------------------------------------------------------------------------------*/

// GAME FRAMEWORK VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas = document.getElementById("canvas");  
var stage: createjs.Stage;
var stats: Stats;

// GAME ASSETS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var assets: createjs.LoadQueue;
var manifest = [
    { id: "startGameButton", src: "assets/images/start_game_button.jpg" },
    { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
    { id: "quitGameButton", src: "assets/images/quitGameButton.png" },
    { id: "gameover", src: "assets/audio/Game Over.mp3" }
]; 

// GAME VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// GAME BUTTONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// GAME MANAGERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// GAME STATES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// START SCREEN VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*---------------------------------------------------------------------------------------------------------*/

// PRELOADER FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// CALLBACK FUNCTION THAT INITIALIZES GAME OBJECTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// FUNCTION TO SETUP STAT COUNTING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '1006px';
    stats.domElement.style.top = '150px';

    document.body.appendChild(stats.domElement);
}

// CALLBACK FUNCTION THAT CREATES OUR MAIN GAME LOOP +++++++++++++++++++++++++++++++++++++++++++++++++++++
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update(); //update present game state

    stats.end(); // end measuring
}

// OUR MAIN GAME FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function main() {

}
/*---------------------------------------------------------------------------------------------------------*/
