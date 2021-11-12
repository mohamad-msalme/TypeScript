import { Eventing } from "./Evening";
import { Axios } from "../apis/Axios";

export class Collections<dataType, ModelType> {
  private models: ModelType[] = [];
  event: Eventing = new Eventing();

  constructor(public request: Axios<dataType>, public deserialize: (json: dataType) => ModelType){}

  getCollection() : ModelType[] {
    return this.models
  }

  async fetch(): Promise<void>{
    try {
      const dataModels = await this.request.getRecords();
      dataModels.forEach(dataModel => this.models.push(this.deserialize(dataModel)))
    } catch (error) {}
  }
};
