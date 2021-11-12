import faker from 'faker';
import { Mappable, Location } from './CustomMap';

export class Company implements Mappable {
  name: string;
  label: string = 'Company';
  catchPhrase: string;
  location: Location;
  constructor() {
    this.init()
  }

  init() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  summary(): string {
    return ` 
    <div>
      <h3>Company Name : ${this.name}</h3>
      <h5>Catch Phrase : ${this.catchPhrase}</h5>
    </div>
    `;
  }
}
