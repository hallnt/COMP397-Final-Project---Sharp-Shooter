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
var managers;
(function (managers) {
    // Collision Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Collision = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Collision() {
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Check the distance between monkey and any other object 
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = monkey.x;
            p1.y = monkey.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((monkey.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    //createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "bomb") {
                        scoreboard.lives--;
                        // game over
                        if (scoreboard.lives < 0) {
                            stage.removeAllChildren();
                            // change to gameOver state
                            changeGameState(state_constants.GAMEOVER_STATE);
                        }
                    }
                    if (gameObject.name == "coin") {
                        scoreboard.score += 100;
                        // move up to leve; 2
                        if (scoreboard.score >= 1000) {
                            stage.removeAllChildren();
                            // change to gameplay_level 2 state
                            changeGameState(state_constants.GAME_LEVEL2_STATE);
                        }
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map