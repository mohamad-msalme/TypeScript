import { View } from "./View";
import { EventMapping } from "./View";
import { User } from "../models/User";

export class UserDetails extends View{

  constructor(parentId : string, public model : User ){
    super(parentId);
    this.model.addEvent('change', () => this.render());
  }

  templete() : string {
    return `
      <h1>User Details</h1>
      <div>User Name : ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
    `;
  }
}