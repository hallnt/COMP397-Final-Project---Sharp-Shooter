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
module states { 
    // GameLevels Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GameLevels {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public levelsLabel: createjs.Text;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.levelsLabel = new createjs.Text("GAME LEVELS", "50px Consolas", "#0026ff");
            this.levelsLabel.x = 155; // position of levels label on the screen         
            this.levelsLabel.y = 20; // position of levels label on the screen 

            this.main();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        // call-back method that responds to easy button clicked event
        private easyButtonClicked(event: createjs.MouseEvent) {
            createjs.Sound.stop();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners(); 
                      
            // switch to gameplay level 1
            changeGameState(config.GAME_LEVEL1_STATE);
        }

        // call-back method that responds to medium button clicked event
        private mediumButtonClicked(event: createjs.MouseEvent) {
            createjs.Sound.stop();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners(); 
                      
            // switch to gameplay level 2
            changeGameState(config.GAME_LEVEL2_STATE);
        }

        // call-back method that responds to hard button clicked event
        private hardButtonClicked(event: createjs.MouseEvent) {
            createjs.Sound.stop();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners(); 
                      
            // switch to gameplay level 3
            changeGameState(config.GAME_LEVEL3_STATE);
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
        // update method
        public update(): void { 
            // update game objects      
            grass.update();
            stage.update();
        }

        // main method
        public main(): void {      
            // instantiate game container
            game = new createjs.Container();

            // add grass object to game container
            grass = new objects.Grass(assets.loader.getResult("grass"));
            game.addChild(grass);

            // add levela label to game container
            game.addChild(this.levelsLabel); 

            // add easy button to game container
            easyButton = new objects.Button(assets.loader.getResult("easyButton"), 320, 170);
            game.addChild(easyButton);
            easyButton.on("click", this.easyButtonClicked);  // add mouse click event to easy button

            // add medium button to game container
            mediumButton = new objects.Button(assets.loader.getResult("mediumButton"), 320, 270);
            game.addChild(mediumButton);
            mediumButton.on("click", this.mediumButtonClicked);  // add mouse click event to medium button

            // add hard button to game container
            hardButton = new objects.Button(assets.loader.getResult("hardButton"), 320, 370);
            game.addChild(hardButton);
            hardButton.on("click", this.hardButtonClicked);  // add mouse click event to hard button

            // add game container to stage
            stage.addChild(game)
        }
    }
}
  