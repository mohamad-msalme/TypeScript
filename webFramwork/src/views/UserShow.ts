import { UserDetails } from "./UserDetails";
import { UserForm } from "./UserForm";
import { View } from "./View";
import { User } from "../models/User";

export class UserShow extends View{

  constructor( parentId: string,public model : User){
    super(parentId);
  }

  templete() {
    return `
        <div id = "user-details"></div>
        <div id = "user-form"></div>
    `
  }

  onRender() {
    new UserDetails('user-details', this.model).render()
    new UserForm('user-form', this.model).render();
  }

}