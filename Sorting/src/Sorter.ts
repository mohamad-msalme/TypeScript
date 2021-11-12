// export interface Sortable {
//   get length(): number
//   compare(prevIndex: number, nextIndex: number): boolean;
//   swap(prevIndex: number, nextIndex: number): void
// }

export abstract class Sorter {
  abstract compare(prev: number, nex: number): boolean
  abstract swap(prev: number, nex: number): void
  abstract get length(): number

  sort(): void {
    for(let i = 0; i < this.length; i++) {
      for( let prev = 0; prev < (this.length -1) - i; prev++ ){
        const next = prev + 1;
        if(this.compare(prev, next))
        this.swap(prev, next)
      }
    }
  }
}
