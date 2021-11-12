import {Sorter} from "./Sorter"
class Node {
  next : null | Node = null;

  constructor(public data: number){}
}

export class LinkedList extends Sorter {

  private head: null | Node = null;
  constructor(){
    super();
  }
  addNode(...data: number[]): void {
    if (!this.head) this.head = new Node(data[0]);

    for(let i = 1; i < data.length; i++){
      const node = new Node(data[i]);
      const lastNode = this.getLast();
      lastNode.next = node;
    };
  }

  get length(): number {
    if(!this.head) return 0;

    let length = 1;
    let node = this.head;
    while(node.next) {
      length++;
      node = node.next
    }
    return length;
  }

  at(indexOfNode: number) : Node{
    let node = this.head // donte swap between this line and the following 
    if(!node) throw new Error('List is Empty');
    let counter = 0;
    while(node){
      if( counter === indexOfNode) return node
      counter++;
      node = node.next
    }
    throw new Error('out of index');
  }

  compare(prevIndexNode: number, nextIndexNode: number): boolean {
    return this.at(prevIndexNode).data > this.at(nextIndexNode).data
  }

  swap(prevIndeNode: number, nextIndexNode: number): void {
    const temp = this.at(prevIndeNode).data;
    this.at(prevIndeNode).data = this.at(nextIndexNode).data;
    this.at(nextIndexNode).data = temp;
  }

  isEmpty() : boolean {
    return !this.head 
  }

  checkIsEmpty(msg = "The linked list is Empty") : void {
    if(this.isEmpty()) throw new Error(msg);
  }
  
  print(): void {
    let node = this.head;
    let str = "";
    if (!this.head) return;
    while (node) {
      str += `${node.data}, `
      node = node.next;
    }
    console.log(`[${str.trim().slice(0, -1)}]`);
  }

  getLast(): Node {
    if(!this.head) throw new Error('List is Empty');

    let tail = this.head;
    while(tail.next) tail = tail.next;
    return tail
  }
}