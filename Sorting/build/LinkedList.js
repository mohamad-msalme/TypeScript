"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.addNode = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (!this.head)
            this.head = new Node(data[0]);
        for (var i = 1; i < data.length; i++) {
            var node = new Node(data[i]);
            var lastNode = this.getLast();
            lastNode.next = node;
        }
        ;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (indexOfNode) {
        var node = this.head; // donte swap between this line and the following 
        if (!node)
            throw new Error('List is Empty');
        var counter = 0;
        while (node) {
            if (counter === indexOfNode)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error('out of index');
    };
    LinkedList.prototype.compare = function (prevIndexNode, nextIndexNode) {
        return this.at(prevIndexNode).data > this.at(nextIndexNode).data;
    };
    LinkedList.prototype.swap = function (prevIndeNode, nextIndexNode) {
        var temp = this.at(prevIndeNode).data;
        this.at(prevIndeNode).data = this.at(nextIndexNode).data;
        this.at(nextIndexNode).data = temp;
    };
    LinkedList.prototype.isEmpty = function () {
        return !this.head;
    };
    LinkedList.prototype.checkIsEmpty = function (msg) {
        if (msg === void 0) { msg = "The linked list is Empty"; }
        if (this.isEmpty())
            throw new Error(msg);
    };
    LinkedList.prototype.print = function () {
        var node = this.head;
        var str = "";
        if (!this.head)
            return;
        while (node) {
            str += node.data + ", ";
            node = node.next;
        }
        console.log("[" + str.trim().slice(0, -1) + "]");
    };
    LinkedList.prototype.getLast = function () {
        if (!this.head)
            throw new Error('List is Empty');
        var tail = this.head;
        while (tail.next)
            tail = tail.next;
        return tail;
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
