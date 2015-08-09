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
    // GamePlayLevel1 Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GamePlayLevel1 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GamePlayLevel1() {
            this.main();
        }
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // update method
        GamePlayLevel1.prototype.update = function () {
            // update game variables
            grass.update();
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
        GamePlayLevel1.prototype.main = function () {
            // add grass object to the stage
            grass = new objects.Grass(assets.getResult("grass"));
            stage.addChild(grass);
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
            createjs.Sound.play("soundtrack", { "loop": -1 });
            // add scoreboard
            scoreboard = new objects.ScoreBoard();
            // add collision manager
            collision = new managers.Collision;
        };
        return GamePlayLevel1;
    })();
    states.GamePlayLevel1 = GamePlayLevel1;
})(states || (states = {}));
//# sourceMappingURL=gameplay_level1.js.map