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
var managers;
(function (managers) {
    // Assets Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Assets = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Assets() {
            // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            this.manifest = [
                { id: "instructionsButton", src: "assets/images/instructions_button.png" },
                { id: "levelsButton", src: "assets/images/levelbutton.png" },
                { id: "easyButton", src: "assets/images/easybutton.png" },
                { id: "mediumButton", src: "assets/images/mediumbutton.png" },
                { id: "hardButton", src: "assets/images/hardbutton.png" },
                { id: "backButton", src: "assets/images/back_button.png" },
                { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
                { id: "quitGameButton", src: "assets/images/quitGameButton.png" },
                { id: "instructionsText", src: "assets/images/instructions.jpg" },
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
            this.preload();
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Preload Method
        Assets.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            //event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map