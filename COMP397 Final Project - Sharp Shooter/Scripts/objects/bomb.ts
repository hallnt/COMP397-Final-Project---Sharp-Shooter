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
module objects {
    // Bomb Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Bomb extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "bomb";
            this.sound = "blast";
            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            /// check if bomb has left screen
            if (this.x < 0 - this.width)
                this.reset();
        }

        private reset(): void {
            this.x = 640;   // start bomb from right of stage
            this.y = Math.floor(Math.random() * 480);   // start bomb at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx;  // move bomb across the stage from right to left
            this.y += this.dy;  // drift bomb up and down
            this.checkBounds();
        }
    }
}  