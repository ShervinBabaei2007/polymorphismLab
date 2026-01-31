"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterGroup = void 0;
var CharacterGroup = /** @class */ (function () {
    function CharacterGroup(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterGroup.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharacterGroup.prototype.compare = function (leftPos, rightPos) {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    };
    CharacterGroup.prototype.swap = function (leftPos, rightPos) {
        // split string since its immutable (can't do anything...)
        var characters = this.data.split("");
        var temp = characters[leftPos];
        characters[leftPos] = characters[rightPos];
        characters[rightPos] = temp;
        this.data = characters.join("");
    };
    return CharacterGroup;
}());
exports.CharacterGroup = CharacterGroup;
