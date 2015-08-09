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
+++ Date Last Modified - August 8, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 2
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
var objects;
(function (objects) {
    // Grass Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Grass(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Grass.prototype.checkBounds = function () {
            /// check if grass has left screen
            if (this.x == -640) {
                this.reset();
            }
        };
        Grass.prototype.reset = function () {
            this.x = 0; // start grass at x=0
            this.y = 0; // start grass at y=0
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Grass.prototype.update = function () {
            this.x -= this.dx; // moves grass across the stage from right to left
            this.checkBounds();
        };
        return Grass;
    })(createjs.Bitmap);
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map