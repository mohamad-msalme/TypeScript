import { Model } from "./Model";

import { Axios } from "../apis/Axios";
import { Attribute } from "./Attribute";
import { Eventing } from "./Evening";
import { CONFIG_AXIOS } from "../helper";
import { Collections } from "./Collections";
import { getRandomeAge } from "../helper";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User extends Model<UserProps, User> {

  static buildUser(attr: UserProps) {
    const deserialize = (data: UserProps) : User => User.buildUser(data);
    return new User(
      new Eventing(),
      new Axios<UserProps>(CONFIG_AXIOS),
      new Attribute<UserProps>(attr),
      new Collections<UserProps, User>(new Axios<UserProps>(CONFIG_AXIOS), deserialize)
    )
  }

  setRandomeAge() {
    const age = getRandomeAge(18, 80);
    this.set({age})
  }

}