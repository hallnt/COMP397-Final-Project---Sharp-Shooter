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
    // PlayerWins Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var PlayerWins = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function PlayerWins() {
            // instantiate game outcome label
            this.gameOutcomeLabel = new createjs.Text("YOU WON!!!", "50px Consolas", "#ffd800");
            this.gameOutcomeLabel.x = 175;
            this.gameOutcomeLabel.y = 100;
            // instantiate yourScore label
            this.yourScoreLabel = new createjs.Text("Your Score: " + scoreboard.score, "35px Consolas", "#ffffff");
            this.yourScoreLabel.x = 160;
            this.yourScoreLabel.y = 200;
            this.main();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //call-back method that responds to playAgain button clicked event
        PlayerWins.prototype.playAgainButtonClicked = function (event) {
            changeGameState(config.GAME_LEVELS_STATE);
        };
        //call-back method that responds to quitGame button clicked event
        PlayerWins.prototype.quitGameButtonClicked = function (event) {
            if (confirm("Quit Game?")) {
                window.close(); // close window    
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        PlayerWins.prototype.update = function () {
            // update game objects
            tropics.update();
            stage.update();
        };
        PlayerWins.prototype.main = function () {
            // instantiate game container
            game = new createjs.Container();
            // add tropics object to game container
            tropics = new objects.Tropics(assets.loader.getResult("tropics"));
            game.addChild(tropics);
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
            createjs.Sound.play("cheer");
            // add game container to stage
            stage.addChild(game);
        };
        return PlayerWins;
    })();
    states.PlayerWins = PlayerWins;
})(states || (states = {}));
//# sourceMappingURL=playerwins.js.map