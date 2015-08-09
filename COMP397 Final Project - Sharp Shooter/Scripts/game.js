/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822
+++ Last Modified By: Teleisha Hall
+++ Date Last Modified - August 8, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 2
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="utility/state_constants.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/grass.ts" />
/// <reference path="objects/monkey.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/bomb.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/startmenu.ts" />
/// <reference path="states/gameplay_level1.ts" />
/// <reference path="states/gameover.ts" />
/*---------------------------------------------------------------------------------------------------------*/
// GAME FRAMEWORK VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas = document.getElementById("canvas");
var stage;
// GAME ASSETS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var assets;
var manifest = [
    { id: "startButton", src: "assets/images/start_game_button.jpg" },
    { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
    { id: "quitGameButton", src: "assets/images/quitGameButton.png" },
    { id: "grass", src: "assets/images/grass.jpg" },
    { id: "monkey", src: "assets/images/monkey.png" },
    { id: "coin", src: "assets/images/coin.png" },
    { id: "bomb", src: "assets/images/bomb.png" },
    { id: "gameover", src: "assets/audio/Game Over.mp3" }
];
// GAME VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var grass;
var monkey;
var coin;
var bombs = [];
var scoreboard;
// GAME BUTTONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var startButton;
var playAgainButton;
var quitGameButton;
// GAME MANAGERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var collision;
// GAME STATES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var startMenu;
var gameplay_level1;
var gameOver;
var presentState;
// START SCREEN VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//var instructions: createjs.Bitmap;
//var fish2: createjs.Bitmap;
/*---------------------------------------------------------------------------------------------------------*/
// PRELOADER FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
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
// CALLBACK FUNCTION THAT CREATES OUR MAIN GAME LOOP +++++++++++++++++++++++++++++++++++++++++++++++++++++
function gameLoop() {
    presentState.update(); //update present game state
}
// OUR MAIN GAME FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function main() {
    startMenu = new states.StartMenu(); // instantiate the startMenu state
    presentState = startMenu; // make present state the startMenu state
}
// FUNCTION TO CHANGE GAME STATE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function changeGameState(state) {
    // switch between game states
    switch (state) {
        case state_constants.START_STATE:
            presentState = startMenu; // make present state the startMenu state
            break;
        case state_constants.GAME_LEVEL1_STATE:
            gameplay_level1 = new states.GamePlayLevel1(); // instantiate gamePlay state            
            presentState = gameplay_level1; // make present state the gameplay_level1 state
            break;
        case state_constants.GAMEOVER_STATE:
            gameOver = new states.GameOver(); // instantiate the gameOver state            
            presentState = gameOver; // make present state the gameOver state
            break;
    }
}
/*---------------------------------------------------------------------------------------------------------*/
//# sourceMappingURL=game.js.map