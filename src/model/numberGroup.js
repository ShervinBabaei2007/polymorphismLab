"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberGroup = void 0;
var NumberGroup = /** @class */ (function () {
    function NumberGroup(data) {
        this.data = data;
    }
    Object.defineProperty(NumberGroup.prototype, "length", {
        get: function () {
            // logic:
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberGroup.prototype.swap = function (leftPos, rightPos) {
        // logic:
        var temp = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = temp;
    };
    NumberGroup.prototype.compare = function (leftPos, rightPos) {
        // logic:
        return this.data[leftPos] > this.data[rightPos];
    };
    return NumberGroup;
}());
exports.NumberGroup = NumberGroup;
