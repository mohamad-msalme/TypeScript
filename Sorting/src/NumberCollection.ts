import { Sorter} from "./Sorter"
export class NumberCollection extends Sorter {
 
  constructor(public collection: number[]){
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  compare(prevIndex: number, nextIndex: number): boolean {
    return this.collection[prevIndex] > this.collection[nextIndex]
  }

  swap(prevIndex: number, nextIndex: number): void {
    this.collection[prevIndex] = this.collection.splice(
      nextIndex,
      1,
      this.collection[prevIndex]
    )[0];
  }
}