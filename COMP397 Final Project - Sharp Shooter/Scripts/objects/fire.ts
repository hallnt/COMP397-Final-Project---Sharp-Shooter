/*----------------------------------------------------------------------------------------------------------
+++ Source File: COMP397 Final Project - Sharp Shooter Scrolling Game
+++ Author: Teleisha Hall
+++ ID: 300820822 
+++ Last Modified By: Teleisha Hall 
+++ Date Last Modified - August 9, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework 
+++ Version: 3
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
module objects {
    // Fire Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Fire extends objects.GameObject {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x = monkey.x;  // moves coin across the stage from right to left
            this.y = monkey.y;
        }
    }
}
 