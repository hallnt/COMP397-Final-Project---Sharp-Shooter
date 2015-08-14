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
module managers {
    // Collision Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Collision {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Check the distance between monkey and any other object 
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;
            
            p1.x = monkey.x;
            p1.y = monkey.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;

            if (utility.distance(p1, p2) < ((monkey.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                                        
                    if (gameObject.name == "bomb" || gameObject.name == "arrow") {                        
                        scoreboard.lives--;     // decrease life when monkey collides with bomb or arrow 
                    }

                    // game over
                    if (scoreboard.lives < 0) {
                        // change to gameOver state
                        createjs.Sound.stop();
                        changeGameState(config.GAMEOVER_STATE);
                    }

                    if (gameObject.name == "coin") {
                        scoreboard.score += 20;    // add 100 points for each coin monkey collides with                    
                    }

                    if (gameObject.name == "banana") {
                        scoreboard.score += 50;    // add 200 points for each banana monkey collides with                    
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        }
    }
} 