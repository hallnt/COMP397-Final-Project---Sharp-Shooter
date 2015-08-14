var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var objects;
(function (objects) {
    // Button Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(imageString, x, y) {
            _super.call(this, imageString);
            this.regX = this.getBounds().width * 0.5; //  find center of button  
            this.regY = this.getBounds().height * 0.5; //  find center of button
            this.x = x;
            this.y = y;
            // creating event listeners for mouseover and mouseout events
            this.on("mouseover", this.OnOver, this);
            this.on("mouseout", this.OnOut, this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Button.prototype.OnOver = function (event) {
            this.alpha = 0.8; // 80% opacity (20% transparent)
        };
        Button.prototype.OnOut = function (event) {
            this.alpha = 1.0; // 100% opacity (no transparency)
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map