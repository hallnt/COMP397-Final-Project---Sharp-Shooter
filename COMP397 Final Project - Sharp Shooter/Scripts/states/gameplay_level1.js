/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822
+++ Last Modified By: Teleisha Hall
+++ Date Last Modified - August 14, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 5
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
var states;
(function (states) {
    // GamePlayLevel1 Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GamePlayLevel1 = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GamePlayLevel1() {
            this.levelLabel = new createjs.Text("LEVEL 1", "40px Consolas", "#ff6a00");
            this.levelLabel.x = 220; // position of instructions label on the screen   
            this.targetLabel = new createjs.Text("Score 1000 to win!", "20px Consolas", "#ffffff");
            this.targetLabel.x = 410; // position of target score label on the screen
            this.targetLabel.y = 450; // position of target score label on the screen    
            this.main();
        }
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // update method
        GamePlayLevel1.prototype.update = function () {
            // update game objects
            grass.update();
            monkey.update();
            coin.update();
            banana.update();
            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb].update();
                collision.check(bombs[bomb]); // check if collision occurs between the monkey and bomb
            }
            collision.check(coin); // check if collision occurs between the monkey and coin
            collision.check(banana); // check if collision occurs between the monkey and banana
            // check if player reaches winning score            
            if (scoreboard.score >= 1000) {
                createjs.Sound.stop();
                stage.removeChild(game);
                game.removeAllChildren();
                game.removeAllEventListeners();
                // switch to player wins state
                changeGameState(config.PLAYER_WINS_STATE);
            }
            scoreboard.update(); // update score and lives
            stage.update();
        };
        GamePlayLevel1.prototype.main = function () {
            // instantiate game container
            game = new createjs.Container();
            // add grass object to game container
            grass = new objects.Grass(assets.loader.getResult("grass"));
            game.addChild(grass);
            // add level label to game container
            game.addChild(this.levelLabel);
            // add target label to game container
            game.addChild(this.targetLabel);
            // add coin object to game container
            coin = new objects.Coin(assets.loader.getResult("coin"));
            game.addChild(coin);
            // add banana object to game container
            banana = new objects.Banana(assets.loader.getResult("banana"));
            game.addChild(banana);
            // add monkey object to game container
            monkey = new objects.Monkey(assets.loader.getResult("monkey"));
            game.addChild(monkey);
            // add bomb object to game container
            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb] = new objects.Bomb(assets.loader.getResult("bomb"));
                game.addChild(bombs[bomb]);
            }
            // add scoreboard
            scoreboard = new objects.ScoreBoard();
            // add collision manager
            collision = new managers.Collision;
            // add game container to stage
            stage.addChild(game);
        };
        return GamePlayLevel1;
    })();
    states.GamePlayLevel1 = GamePlayLevel1;
})(states || (states = {}));
//# sourceMappingURL=gameplay_level1.js.map