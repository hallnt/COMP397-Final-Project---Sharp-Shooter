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
    // GamePlayLevel2 Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GamePlayLevel2 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GamePlayLevel2() {
            this.levelLabel = new createjs.Text("LEVEL 2", "40px Consolas", "#00FF21");
            this.levelLabel.x = 220; // position of instructions label on the screen 
            this.targetLabel = new createjs.Text("Score 1100 to win!", "20px Consolas", "#ffffff");
            this.targetLabel.x = 410; // position of target score label on the screen
            this.targetLabel.y = 450; // position of target score label on the screen    
            this.main();
        }
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //this.y += this.dy;  // drift arrow up and down
        // update method
        GamePlayLevel2.prototype.update = function () {
            // update game objects
            mountain.update();
            monkey.update();
            coin.update();
            banana.update();
            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb].update();
                collision.check(bombs[bomb]); // check if collision occurs between the monkey and bomb
            }
            for (var arrow = 0; arrow < 2; arrow++) {
                arrows[arrow].update();
                collision.check(arrows[arrow]); // check if collision occurs between the monkey and arrow
            }
            collision.check(coin); // check if collision occurs between the monkey and coin
            collision.check(banana); // check if collision occurs between the monkey and banana
            // check if player reaches winning score            
            if (scoreboard.score >= 1100) {
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
        GamePlayLevel2.prototype.main = function () {
            // instantiate game container
            game = new createjs.Container();
            // add mountain object to game container
            mountain = new objects.Mountain(assets.loader.getResult("mountain"));
            game.addChild(mountain);
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
            // add arrow object to game container
            for (var arrow = 0; arrow < 2; arrow++) {
                arrows[arrow] = new objects.Arrow(assets.loader.getResult("arrow"));
                game.addChild(arrows[arrow]);
            }
            // add scoreboard
            scoreboard = new objects.ScoreBoard();
            // add collision manager
            collision = new managers.Collision;
            // add game container to stage
            stage.addChild(game);
        };
        return GamePlayLevel2;
    })();
    states.GamePlayLevel2 = GamePlayLevel2;
})(states || (states = {}));
//# sourceMappingURL=gameplay_level2.js.map