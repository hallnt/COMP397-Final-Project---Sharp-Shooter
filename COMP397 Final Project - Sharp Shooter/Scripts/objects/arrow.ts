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
    // Arrow Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Arrow extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "arrow";
            this.sound = "shot";
            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            /// check if arrow has left screen
            if (this.x < 0 - this.width)
                this.reset();
        }

        private reset(): void {
            this.x = 640;   // start arrow from right of stage
            this.y = Math.floor(Math.random() * 480);   // start arrow at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx;  // move arrow across the stage from right to left            
            this.checkBounds();
        }
    }
}   