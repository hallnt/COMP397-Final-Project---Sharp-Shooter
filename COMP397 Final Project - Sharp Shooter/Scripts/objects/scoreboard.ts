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
module objects { 
    // Scoreboard Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public score: number = 0;
        public lives: number = 5;

        public scoreLabel: createjs.Text;
        public livesLabel: createjs.Text;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "25px Consolas", "#ffffff");
            this.scoreLabel = new createjs.Text("Score:", "25px Consolas", "#ffffff");
            this.scoreLabel.x = 480; // position of score label on the screen         
            game.addChild(this.livesLabel); // add lives label to game container
            game.addChild(this.scoreLabel); // add score label to game container
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
}

