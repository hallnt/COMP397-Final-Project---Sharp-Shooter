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
    // Coin Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Coin(imageString) {
            _super.call(this, imageString);
            this.name = "coin";
            this.sound = "points";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Coin.prototype.checkBounds = function () {
            // check if coin has left screen
            if (this.x < 0 - this.width)
                this.reset();
        };
        Coin.prototype.reset = function () {
            this.x = 640; // start coin from right of stage
            this.y = Math.floor(Math.random() * 480); // start coin at random location on stage
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Coin.prototype.update = function () {
            this.x -= this.dx; // moves coin across the stage from right to left
            this.checkBounds();
        };
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map