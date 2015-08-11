/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822
+++ Last Modified By: Teleisha Hall
+++ Date Last Modified - August 11, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 4
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
var config;
(function (config) {
    // STATE MACHINE CONSTANTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    config.START_MENU_STATE = 0;
    config.INSTRUCTIONS_STATE = 1;
    config.GAME_LEVEL1_STATE = 2;
    config.GAME_LEVEL2_STATE = 3;
    config.GAME_LEVEL3_STATE = 4;
    config.GAMEOVER_STATE = 5;
    config.PLAYER_WINS_STATE = 6;
})(config || (config = {}));
//# sourceMappingURL=config.js.map