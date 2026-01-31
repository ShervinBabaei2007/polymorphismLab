"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortUtil = void 0;
var SortUtil = /** @class */ (function () {
    function SortUtil(collection) {
        this.collection = collection;
    }
    SortUtil.prototype.sort = function () {
        var length = this.collection.length;
        var isSorted = false;
        var lastUnsorted = length - 1;
        while (!isSorted) {
            isSorted = true;
            for (var i = 0; i < lastUnsorted; i++) {
                if (this.collection.compare(i, i + 1)) {
                    this.collection.swap(i, i + 1);
                    isSorted = false;
                }
            }
            lastUnsorted--;
        }
    };
    return SortUtil;
}());
exports.SortUtil = SortUtil;
