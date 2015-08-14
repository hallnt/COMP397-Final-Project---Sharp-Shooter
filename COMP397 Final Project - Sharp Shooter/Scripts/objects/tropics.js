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
    // Tropics Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Tropics = (function (_super) {
        __extends(Tropics, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Tropics(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Tropics.prototype.checkBounds = function () {
            /// check if tropics has left screen
            if (this.x == -1280) {
                this.reset();
            }
        };
        Tropics.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Tropics.prototype.update = function () {
            this.x -= this.dx; // moves tropics across the stage from right to left
            this.checkBounds();
        };
        return Tropics;
    })(createjs.Bitmap);
    objects.Tropics = Tropics;
})(objects || (objects = {}));
//# sourceMappingURL=tropics.js.map