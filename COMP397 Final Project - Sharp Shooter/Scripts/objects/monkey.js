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
    // Monkey Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Monkey = (function (_super) {
        __extends(Monkey, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Monkey(imageString) {
            _super.call(this, imageString);
            this.sound = "soundtrack";
            this.x = 70;
            // play and repeat sound
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Monkey.prototype.update = function () {
            this.y = stage.mouseY; // position monkey under mouse
        };
        return Monkey;
    })(objects.GameObject);
    objects.Monkey = Monkey;
})(objects || (objects = {}));
//# sourceMappingURL=monkey.js.map