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
    // Instructions Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Instructions {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public instructionsLabel: createjs.Text;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.instructionsLabel = new createjs.Text("INSTRUCTIONS", "35px Consolas", "#00ff21");
            this.instructionsLabel.x = 190; // position of instructions label on the screen   

            instructionsText = new createjs.Bitmap(assets.loader.getResult("instructionsText"));
            instructionsText.x = 15;
            instructionsText.y = 45;

            this.main();
        }

        // PRIVATE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        // call-back method that responds to back button clicked event
        private backButtonClicked(event: createjs.MouseEvent) {
            createjs.Sound.stop();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners(); 
                      
            // switch back to startMenu state
            changeGameState(config.START_MENU_STATE);
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
        // update method
        public update(): void { 
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

            // add instructions text image to game container            
            game.addChild(instructionsText);

            // add instructions label to game container
            game.addChild(this.instructionsLabel); 

            // add back button to game container
            backButton = new objects.Button(assets.loader.getResult("backButton"), 320, 445);
            game.addChild(backButton);
            backButton.on("click", this.backButtonClicked);  // add mouse click event to back button

            // add game container to stage
            stage.addChild(game)
        }
    }
}
 