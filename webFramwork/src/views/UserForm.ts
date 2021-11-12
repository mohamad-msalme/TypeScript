import { EventMapping } from "./View";
import { ViewRequiredFun } from "./View";
import { View } from "./View";
import { User } from "../models/User";

export class UserForm extends View implements ViewRequiredFun{

  private onNameChange: string;
  constructor(parentId : string, public model : User ){
    super(parentId);
    this.model.addEvent('change', () => this.render());
  }

  eventMap() : EventMapping {
    return {
      'click:.set-age': this.onAgeBtnClick,
      'click:.set-name': this.onSetNameBtnClick,
      'change:.input-name': this.onTextNameChange,
      'click:.save-model': this.onSaveBtnClick,
    }
  }

  onSaveBtnClick = () : void => {
    this.model.save();
    this.setDirty(false);
  }

  onSetNameBtnClick = () : void => {
    this.onNameChange && this.model.set({name: this.onNameChange});
    this.setDirty(true)
  }

  onTextNameChange = (e: Event) : void => {
    const inputNameElement  = e.target as HTMLInputElement;
    const tempText = inputNameElement.value
    this.onNameChange = tempText
  }

  onAgeBtnClick = () : void => {
    this.model.setRandomeAge();
    this.setDirty(true)
  }

  templete() : string {
    return `
    <div>
    <h1>User Form</h1>
      <label>User Name:<input class = "input-name" type = "text" value = ${this.model.get('name')} required></input></label>
      <button class='set-name'>update name</button>
      <button class='set-age'>set random age</button>
      <button disabled = "false" class='save-model'>Save</button>
    </div>
      
    `;
  }

  
}