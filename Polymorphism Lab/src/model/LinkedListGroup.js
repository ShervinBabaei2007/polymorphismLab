"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListGroup = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
var LinkedListGroup = /** @class */ (function () {
    function LinkedListGroup() {
        this.head = null;
    }
    // Create Node out of data and attach to end of list
    LinkedListGroup.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedListGroup.prototype, "length", {
        // Should return number of Nodes in List
        get: function () {
            // implement this part yourself
            var count = 0;
            var currentCount = this.head;
            while (currentCount) {
                (count++, (currentCount = currentCount.next));
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    // Convenience method that returns a Node at a given index
    LinkedListGroup.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Error: Index out of bounds");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Error: Index out of bounds");
    };
    LinkedListGroup.prototype.compare = function (leftPos, rightPos) {
        // Implement this part yourself
        var leftNode = this.at(leftPos);
        var rightNode = this.at(rightPos);
        return leftNode.data > rightNode.data;
    };
    LinkedListGroup.prototype.swap = function (leftPos, rightPos) {
        // Implement this part yourself
        var leftNode = this.at(leftPos);
        var rightNode = this.at(rightPos);
        // swap data.
        var temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    };
    LinkedListGroup.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedListGroup;
}());
exports.LinkedListGroup = LinkedListGroup;
