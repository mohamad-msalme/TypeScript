import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// sort Linked list
const linkedList = new LinkedList();
linkedList.addNode(3, 2, 1, 5, 6, 8, 9);
linkedList.sort();
linkedList.print();
// sort array of numbers
const numbers = new NumberCollection([-1, 0, 5, 2]);
numbers.sort()
console.log(numbers.collection);
// sort characters 
const string = new CharactersCollection("xyab");
string.sort();
console.log(string.collection);


