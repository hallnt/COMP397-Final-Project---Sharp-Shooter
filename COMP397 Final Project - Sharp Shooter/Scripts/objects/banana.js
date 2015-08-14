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
    // Banana Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Banana = (function (_super) {
        __extends(Banana, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Banana(imageString) {
            _super.call(this, imageString);
            this.name = "banana";
            this.sound = "bite";
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Banana.prototype.checkBounds = function () {
            /// check if banana has left screen
            if (this.x < 0 - this.width)
                this.reset();
        };
        Banana.prototype.reset = function () {
            this.x = 640; // start banana from right of stage
            this.y = Math.floor(Math.random() * 480); // start banana at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Banana.prototype.update = function () {
            this.x -= this.dx; // move banana across the stage from right to left
            this.y += this.dy; // drift banana up and down
            this.checkBounds();
        };
        return Banana;
    })(objects.GameObject);
    objects.Banana = Banana;
})(objects || (objects = {}));
//# sourceMappingURL=banana.js.map