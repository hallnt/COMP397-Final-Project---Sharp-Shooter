/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822
+++ Last Modified By: Teleisha Hall
+++ Date Last Modified - August 9, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 4
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="utility/config.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/grass.ts" />
/// <reference path="objects/mountain.ts" />
/// <reference path="objects/tropics.ts" />
/// <reference path="objects/monkey.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/banana.ts" />
/// <reference path="objects/bomb.ts" />
/// <reference path="objects/arrow.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/startmenu.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/gameplay_level1.ts" />
/// <reference path="states/gameplay_level2.ts" />
/// <reference path="states/gameplay_level3.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/playerwins.ts" />
/// <reference path="objects/banana.ts" />
/*---------------------------------------------------------------------------------------------------------*/
// GAME FRAMEWORK VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
// GAME VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var grass;
var mountain;
var tropics;
var monkey;
var coin;
var banana;
var bombs = [];
var arrows = [];
var fire;
var scoreboard;
// GAME BUTTONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var instructionsButton;
var startButton;
var backButton;
var playAgainButton;
var quitGameButton;
// GAME MANAGERS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var assets;
var collision;
// GAME STATES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var startMenu;
var instructions;
var gameplay_level1;
var gameplay_level2;
var gameplay_level3;
var gameOver;
var playerWins;
var currentState;
/*---------------------------------------------------------------------------------------------------------*/
// PRELOADER FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function preload() {
    assets = new managers.Assets();
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
// FUNCTION TO SETUP STAT COUNTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '1010px';
    stats.domElement.style.top = '120px';
    document.body.appendChild(stats.domElement);
}
// CALLBACK FUNCTION THAT CREATES OUR MAIN GAME LOOP +++++++++++++++++++++++++++++++++++++++++++++++++++++
function gameLoop() {
    stats.begin(); // Begin measuring
    // update current state
    currentState.update();
    stats.end(); // end measuring
}
// OUR MAIN GAME FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function main() {
    startMenu = new states.StartMenu(); // instantiate the startMenu state
    currentState = startMenu; // make current state the startMenu state
}
// FUNCTION TO CHANGE GAME STATE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function changeGameState(state) {
    // switch between game states
    switch (state) {
        case config.START_MENU_STATE:
            currentState = startMenu; // make current state the startMenu state
            break;
        case config.INSTRUCTIONS_STATE:
            instructions = new states.Instructions(); // instantiate instructions state
            currentState = instructions; // make current state the instructions statee
            break;
        case config.GAME_LEVEL1_STATE:
            gameplay_level1 = new states.GamePlayLevel1(); // instantiate gameplay_Level1 state            
            currentState = gameplay_level1; // make current state the gameplay_level1 state
            break;
        case config.GAME_LEVEL2_STATE:
            gameplay_level2 = new states.GamePlayLevel2(); // instantiate gameplay_Level2 state            
            currentState = gameplay_level2; // make current state the gameplay_Level2 state
            break;
        case config.GAME_LEVEL3_STATE:
            gameplay_level3 = new states.GamePlayLevel3(); // instantiate gameplay_level3 state            
            currentState = gameplay_level3; // make current state the gameplay_level3 state
            break;
        case config.GAMEOVER_STATE:
            gameOver = new states.GameOver(); // instantiate the gameOver state            
            currentState = gameOver; // make current state the gameOver state
            break;
        case config.PLAYER_WINS_STATE:
            playerWins = new states.PlayerWins(); // instantiate playerWins state            
            currentState = playerWins; // make current state the playerWins state
            break;
    }
}
/*---------------------------------------------------------------------------------------------------------*/
//# sourceMappingURL=game.js.map