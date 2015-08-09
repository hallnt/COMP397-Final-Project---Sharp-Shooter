/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822
+++ Last Modified By: Teleisha Hall
+++ Date Last Modified - August 9, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 3
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
var states;
(function (states) {
    // GamePlayLevel2 Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GamePlayLevel2 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GamePlayLevel2() {
            this.main();
        }
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // update method
        GamePlayLevel2.prototype.update = function () {
            // update game variables
            mountain.update();
            monkey.update();
            coin.update();
            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb].update();
                collision.check(bombs[bomb]); // check if collision occurs between the monkey and bomb
            }
            collision.check(coin); // check if collision occurs between the monkey and coin
            scoreboard.update(); // update score and lives
            stage.update();
        };
        GamePlayLevel2.prototype.main = function () {
            // add mountain object to the stage
            mountain = new objects.Mountain(assets.getResult("mountain"));
            stage.addChild(mountain);
            // add coin object to the stage
            coin = new objects.Coin(assets.getResult("coin"));
            stage.addChild(coin);
            // add monkey object to the stage
            monkey = new objects.Monkey(assets.getResult("monkey"));
            stage.addChild(monkey);
            // add bomb object to the stage
            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb] = new objects.Bomb(assets.getResult("bomb"));
                stage.addChild(bombs[bomb]);
            }
            // add scoreboard
            scoreboard = new objects.ScoreBoard();
            // add collision manager
            collision = new managers.Collision;
        };
        return GamePlayLevel2;
    })();
    states.GamePlayLevel2 = GamePlayLevel2;
})(states || (states = {}));
//# sourceMappingURL=gameplay_level2.js.map