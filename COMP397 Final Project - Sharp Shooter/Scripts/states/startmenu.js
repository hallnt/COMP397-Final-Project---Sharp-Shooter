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
    // StartMenu Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var StartMenu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function StartMenu() {
            this.gameTitleLabel = new createjs.Text("SHARP SHOOTER", "60px Consolas", "#00ff21");
            this.gameTitleLabel.x = 100; // position of instructions label on the screen         
            this.gameTitleLabel.y = 10; // position of instructions label on the screen 
            this.main();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // call-back method that responds to instructions button clicked event
        StartMenu.prototype.instructionsButtonClicked = function (event) {
            createjs.Sound.stop();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            // switch to instructions state
            changeGameState(config.INSTRUCTIONS_STATE);
        };
        // call-back method that responds to levels button clicked event
        StartMenu.prototype.levelsButtonClicked = function (event) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            // switch to gameplay level 1 state
            changeGameState(config.GAME_LEVELS_STATE);
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // update method
        StartMenu.prototype.update = function () {
            // update game objects      
            grass.update();
            monkey.update();
            stage.update();
        };
        // main method
        StartMenu.prototype.main = function () {
            // instantiate game container
            game = new createjs.Container();
            // add grass object to game container
            grass = new objects.Grass(assets.loader.getResult("grass"));
            game.addChild(grass);
            // add monkey object to game container
            monkey = new objects.Monkey(assets.loader.getResult("monkey"));
            game.addChild(monkey);
            // add gameTitle label to game container
            game.addChild(this.gameTitleLabel);
            // add instructions button to game container
            instructionsButton = new objects.Button(assets.loader.getResult("instructionsButton"), 320, 225);
            game.addChild(instructionsButton);
            instructionsButton.on("click", this.instructionsButtonClicked); // add mouse click event to instructions button
            // add levels button to game container
            levelsButton = new objects.Button(assets.loader.getResult("levelsButton"), 320, 305);
            game.addChild(levelsButton);
            levelsButton.on("click", this.levelsButtonClicked); // add mouse click event to levels button
            // add game container to stage
            stage.addChild(game);
        };
        return StartMenu;
    })();
    states.StartMenu = StartMenu;
})(states || (states = {}));
//# sourceMappingURL=startmenu.js.map