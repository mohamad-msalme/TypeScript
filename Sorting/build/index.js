"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// sort Linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.addNode(3, 2, 1, 5, 6, 8, 9);
linkedList.sort();
linkedList.print();
// sort array of numbers
var numbers = new NumberCollection_1.NumberCollection([-1, 0, 5, 2]);
numbers.sort();
console.log(numbers.collection);
// sort characters 
var string = new CharactersCollection_1.CharactersCollection("xyab");
string.sort();
console.log(string.collection);
