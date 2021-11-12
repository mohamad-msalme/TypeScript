import { ModelAttribut } from "./Model";

export class Attribute<T> implements ModelAttribut<T>{

  constructor(public data: T){}

  getAttr<key extends keyof T>(propsName: key): T[key] { 
    return this.data[propsName] 
  }

  setAttr(update: T): void {
    this.data = {...this.data, ...update[0]};
  }

  getAllAttr() : T {
    return this.data
  }

}