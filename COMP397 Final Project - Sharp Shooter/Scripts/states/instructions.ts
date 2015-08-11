/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822 
+++ Last Modified By: Teleisha Hall 
+++ Date Last Modified - August 11, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework 
+++ Version: 4
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
module states { 
    // Instructions Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Instructions {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public instructionsLabel: createjs.Text;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.instructionsLabel = new createjs.Text("INSTRUCTIONS", "50px Consolas", "#ff6a00");
            this.instructionsLabel.x = 140; // position of instructions label on the screen         
            this.instructionsLabel.y = 20; // position of instructions label on the screen 

            this.main();
        }

        // PRIVATE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        // call-back method that responds to start button clicked event
        private startButtonClicked(event: createjs.MouseEvent) {
            createjs.Sound.removeSound("soundtrack");
            game.removeAllChildren()
            game.removeAllEventListeners();
            stage.removeAllChildren();            
            // switch to gameplay level 1 state
            changeGameState(config.GAME_LEVEL1_STATE);
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

            // add instructions label to game container
            game.addChild(this.instructionsLabel); 

            // add start button to game container
            startButton = new objects.Button(assets.loader.getResult("startButton"), 320, 445);
            game.addChild(startButton);
            startButton.on("click", this.startButtonClicked);  // add mouse click event to start button

            // add game container to stage
            stage.addChild(game)
        }
    }
}
 