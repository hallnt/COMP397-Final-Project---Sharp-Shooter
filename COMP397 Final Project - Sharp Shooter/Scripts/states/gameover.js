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
    // GameOver Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GameOver = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            // instantiate game outcome label
            this.gameOutcomeLabel = new createjs.Text("GAME OVER!", "50px Consolas", "#ee5b11");
            this.gameOutcomeLabel.x = 175;
            this.gameOutcomeLabel.y = 100;
            // instantiate yourScore label
            this.yourScoreLabel = new createjs.Text("Your Score: " + scoreboard.score, "35px Consolas", "#00FF21");
            this.yourScoreLabel.x = 160;
            this.yourScoreLabel.y = 200;
            this.main();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //call-back method that responds to playAgain button clicked event
        GameOver.prototype.playAgainButtonClicked = function (event) {
            changeGameState(config.GAME_LEVELS_STATE);
        };
        //call-back method that responds to quitGame button clicked event
        GameOver.prototype.quitGameButtonClicked = function (event) {
            if (confirm("Quit Game?")) {
                window.close(); // close window    
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.update = function () {
            // update game objects
            grass.update();
            stage.update();
        };
        GameOver.prototype.main = function () {
            // instantiate game container
            game = new createjs.Container();
            // add grass object to game container
            grass = new objects.Grass(assets.loader.getResult("grass"));
            game.addChild(grass);
            // add gameOutcome label to game container
            game.addChild(this.gameOutcomeLabel);
            // add your score label to game container
            game.addChild(this.yourScoreLabel);
            // add play again button to the stage
            playAgainButton = new objects.Button(assets.loader.getResult("playAgainButton"), 215, 360);
            game.addChild(playAgainButton);
            playAgainButton.on("click", this.playAgainButtonClicked); // add mouse click event to play again button
            // add quit game button to game container
            quitGameButton = new objects.Button(assets.loader.getResult("quitGameButton"), 410, 360);
            game.addChild(quitGameButton);
            quitGameButton.on("click", this.quitGameButtonClicked); // add mouse click event to quit game button
            // play sound clip
            createjs.Sound.play("gameover");
            // add game container to stage
            stage.addChild(game);
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map