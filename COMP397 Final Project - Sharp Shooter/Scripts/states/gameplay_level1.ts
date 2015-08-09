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
module states { 
    // GamePlay Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GamePlayLevel1 {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // update method
        public update(): void { 
            // update game variables
            grass.update();
            monkey.update();
            coin.update();

            for (var bomb = 0; bomb < 3; bomb++) {
                bombs[bomb].update();
                collision.check(bombs[bomb]); // check if collision occurs between the monkey and bomb
            }
            collision.check(coin);  // check if collision occurs between the monkey and coin

            scoreboard.update();    // update score and lives
            stage.update();
        }

        public main(): void { 
            // add grass object to the stage
            grass = new objects.Grass(assets.getResult("grass"));
            stage.addChild(grass);

            // add coin object to the stage
            coin = new objects.Coin(assets.getResult("coin"));
            stage.addChild(coin);

            // add fish object to the stage
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
        }
    }
}
 