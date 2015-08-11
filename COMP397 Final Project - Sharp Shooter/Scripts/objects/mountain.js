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
+++ Date Last Modified - August 11, 2015
+++ Program Description: A 2D scrolling and shooting arcade web game using the Createjs framework
+++ Version: 4
+++ Revision History: https://github.com/hallnt/COMP397-Final-Project---Sharp-Shooter/commits/master
-----------------------------------------------------------------------------------------------------------*/
var objects;
(function (objects) {
    // Mountain Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Mountain = (function (_super) {
        __extends(Mountain, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Mountain(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Mountain.prototype.checkBounds = function () {
            /// check if mountain has left screen
            if (this.x == -1280) {
                this.reset();
            }
        };
        Mountain.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Mountain.prototype.update = function () {
            this.x -= this.dx; // moves mountain across the stage from right to left
            this.checkBounds();
        };
        return Mountain;
    })(createjs.Bitmap);
    objects.Mountain = Mountain;
})(objects || (objects = {}));
//# sourceMappingURL=mountain.js.map