import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {

  constructor(public collection : string){
    super();
  }

  get length() : number{
    return this.collection.length
  }

  compare(prevIndex: number, nextIndex: number) : boolean {
    return this.collection[prevIndex].toLocaleLowerCase() > this.collection[nextIndex].toLocaleLowerCase()
  }

  swap(prevIndex: number, nextIndex: number): void{
    const characters = this.collection.split('');

    characters[prevIndex] = characters.splice(
      nextIndex,
      1,
      characters[prevIndex]
    )[0];
    
    this.collection = characters.join('');
  }
}