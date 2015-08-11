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
module managers {
    // Assets Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Assets {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public loader: createjs.LoadQueue;

        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private manifest = [
            { id: "instructionsButton", src: "assets/images/instructions_button.png" },
            { id: "startButton", src: "assets/images/start_game_button.png" },
            { id: "backButton", src: "assets/images/back_button.png" },
            { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
            { id: "quitGameButton", src: "assets/images/quitGameButton.png" },
            { id: "grass", src: "assets/images/grass.png" },
            { id: "mountain", src: "assets/images/mountain.jpg" },
            { id: "tropics", src: "assets/images/nightTropics.png" },
            { id: "monkey", src: "assets/images/monkey.png" },
            { id: "coin", src: "assets/images/coin.png" },
            { id: "banana", src: "assets/images/Banana_Peel.png" },
            { id: "bomb", src: "assets/images/bomb.png" },
            { id: "arrow", src: "assets/images/arrow.png" },
            { id: "fire", src: "assets/images/fire.png" },
            { id: "blast", src: "assets/audio/blast.wav" },
            { id: "shot", src: "assets/audio/shot.wav" },
            { id: "points", src: "assets/audio/points.wav" },
            { id: "bite", src: "assets/audio/bite.wav" },
            { id: "soundtrack", src: "assets/audio/lean on.mp3" },
            { id: "gameover", src: "assets/audio/Game Over.mp3" },
            { id: "cheer", src: "assets/audio/cheer.wav" }
        ];

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.preload();
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Preload Method
        public preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            //event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        }
    }
}  