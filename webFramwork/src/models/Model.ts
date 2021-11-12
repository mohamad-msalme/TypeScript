import { Callback } from "./Evening";

export interface ModelEvent {
  addEvent(eventName: string, callback: Callback) : void;
  triggerEvent(eventName: string) : void;
}

export interface ModelAttribut<T> {
  data: T;
  getAttr<key extends keyof T>(propsName: key): T[key];
  setAttr(update: T): void;
  getAllAttr() : T;
}

export interface ModelRequest<T> {
  getRecordById(id: number): Promise<T>;
  newRecorde(data: T) : Promise<T>;
  removeRecorde(id: number) : Promise<void>;
  updateRecorde(data: T) : Promise<T>;
}

export interface ModelCollections<T, ModelType> {
  fetch() : Promise<void>
  getCollection() : ModelType[];
}

export class Model<T, ModelType> {

  constructor(
    private event: ModelEvent,
    private request : ModelRequest<T>,
    private attribute: ModelAttribut<T>,
    private collection: ModelCollections<T, ModelType>
  ) {}

  get get() { 
    return this.attribute.getAttr.bind(this.attribute);
  }

  get getRecord() {
    return this.attribute.getAllAttr.bind(this.attribute);
  }

  get getCollection() {
    return this.collection.getCollection.bind(this.collection);
  }

  set(update: T): void {
    this.attribute.setAttr.call(this.attribute, [update]);
    this.triggerEvent('change');
  }

  get addEvent() {
    return this.event.addEvent.bind(this.event)
  }

  get triggerEvent() : (eventName: string) => void {
    return this.event.triggerEvent.bind(this.event)
  }

  async save(): Promise<void> {
    try {
      this.get('id')
        ? await this.request.updateRecorde(this.getRecord())
        : await this.request.newRecorde(this.getRecord())
      this.triggerEvent('save');
    } catch (error) {
      console.log(error);
    }
    
  }

  async fetch() : Promise<void>{
    try {
      if(!this.get('id')) throw new Error('Id is Missing');

      const data = await this.request.getRecordById(this.get('id'));
      this.set(data);
    } catch (error) {
      console.log(error);
    }
  }

  async removeRecorde(id: number) : Promise<void>{
    try {
      await this.request.removeRecorde(id);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchCollection() : Promise<void> {
    try {
      await this.collection.fetch();
      this.event.triggerEvent('collectionloaded');
    } catch (error) {
      console.log(error);
    }
  }
}