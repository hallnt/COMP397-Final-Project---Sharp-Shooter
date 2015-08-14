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
    // Arrow Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Arrow = (function (_super) {
        __extends(Arrow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Arrow(imageString) {
            _super.call(this, imageString);
            this.name = "arrow";
            this.sound = "shot";
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Arrow.prototype.checkBounds = function () {
            /// check if arrow has left screen
            if (this.x < 0 - this.width)
                this.reset();
        };
        Arrow.prototype.reset = function () {
            this.x = 640; // start arrow from right of stage
            this.y = Math.floor(Math.random() * 480); // start arrow at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Arrow.prototype.update = function () {
            this.x -= this.dx; // move arrow across the stage from right to left            
            this.checkBounds();
        };
        return Arrow;
    })(objects.GameObject);
    objects.Arrow = Arrow;
})(objects || (objects = {}));
//# sourceMappingURL=arrow.js.map