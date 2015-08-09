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
    // StartMenu Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class StartMenu {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        // PRIVATE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        // call-back method that responds to play button clicked event
        private startButtonClicked(event: createjs.MouseEvent) {
            // remove sound and objects from the stage
                //createjs.Sound.removeSound("soundtrack");
            stage.removeAllChildren();
            stage.removeAllEventListeners();
            changeGameState(state_constants.GAME_LEVEL1_STATE);
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
        // update method
        public update(): void {             
            stage.update(); // update stage
        }

        // main method
        public main(): void {            
            // add instructions image to the stage
            /*instructions = new createjs.Bitmap(assets.getResult("instructions"));
            instructions.x = 70;
            stage.addChild(instructions);

            // add fish object to the stage
            fish2 = new createjs.Bitmap(assets.getResult("fish"));
            fish2.x = 450;
            fish2.y = 240;
            stage.addChild(fish2); */

            // add start button to the stage
            startButton = new objects.Button(assets.getResult("startButton"), 320, 345);
            stage.addChild(startButton);
            startButton.on("click", this.startButtonClicked);  // add mouse click event to start button

            // play sound clip
                //createjs.Sound.play("soundtrack");
        }
    }
}
