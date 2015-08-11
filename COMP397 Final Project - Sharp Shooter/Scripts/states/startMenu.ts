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
    // StartMenu Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class StartMenu {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public gameTitleLabel: createjs.Text;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.gameTitleLabel = new createjs.Text("SHARP SHOOTER", "60px Consolas", "#00FF21");
            this.gameTitleLabel.x = 100; // position of instructions label on the screen         
            this.gameTitleLabel.y = 10; // position of instructions label on the screen 
            
            this.main();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        // call-back method that responds to instructions button clicked event
        private instructionsButtonClicked(event: createjs.MouseEvent) {
            // switch to instructions state
            changeGameState(config.INSTRUCTIONS_STATE);
        }

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
            monkey.update();     
            stage.update(); 
        }

        // main method
        public main(): void {   
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
            instructionsButton = new objects.Button(assets.loader.getResult("instructionsButton"), 320, 245);
            game.addChild(instructionsButton);
            instructionsButton.on("click", this.instructionsButtonClicked);  // add mouse click event to instructions button

            // add start button to game container
            startButton = new objects.Button(assets.loader.getResult("startButton"), 320, 345);
            game.addChild(startButton);
            startButton.on("click", this.startButtonClicked);  // add mouse click event to start button
            
            // add game container to stage
            stage.addChild(game);
        }
    }
}
