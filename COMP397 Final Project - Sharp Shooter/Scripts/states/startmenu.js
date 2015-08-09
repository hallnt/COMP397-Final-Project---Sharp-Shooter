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
var states;
(function (states) {
    // StartMenu Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var StartMenu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function StartMenu() {
            this.main();
        }
        // PRIVATE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // call-back method that responds to play button clicked event
        StartMenu.prototype.startButtonClicked = function (event) {
            // remove sound and objects from the stage
            //createjs.Sound.removeSound("intro");
            stage.removeAllChildren();
            stage.removeAllEventListeners();
            changeGameState(state_constants.GAME_LEVEL1_STATE);
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // update method
        StartMenu.prototype.update = function () {
            // update game variables      
            grass.update();
            monkey.update();
            stage.update();
        };
        // main method
        StartMenu.prototype.main = function () {
            // add grass object to the stage
            grass = new objects.Grass(assets.getResult("grass"));
            stage.addChild(grass);
            // add start button to the stage
            startButton = new objects.Button(assets.getResult("startButton"), 320, 345);
            stage.addChild(startButton);
            startButton.on("click", this.startButtonClicked); // add mouse click event to start button
            // add monkey object to the stage
            monkey = new objects.Monkey(assets.getResult("monkey"));
            stage.addChild(monkey);
            // play sound clip
            //createjs.Sound.play("intro");
        };
        return StartMenu;
    })();
    states.StartMenu = StartMenu;
})(states || (states = {}));
//# sourceMappingURL=startmenu.js.map