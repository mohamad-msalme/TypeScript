import faker from "faker"
import { Mappable, Location } from './CustomMap';
export class User implements Mappable {
  // Props 
  label: string = "User";
  private firstName: string;
  private lastName: string;
  private fullName: string;
  private email: string;
  private jobTitle: string;
  private age: number;
  location: Location;

  constructor() {
    this.init()
  }

  init() {
    enum OptionAge {
      MAX_AGE= 50,
      MIN_AGE= 18
    }
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName();
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = faker.internet.email();
    this.age = faker.datatype.number({max: OptionAge.MAX_AGE, min: OptionAge.MIN_AGE})
    this.jobTitle = faker.name.jobTitle()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  summary(): string {
    return `
    <div>
      <h3>User Name : ${this.fullName}</h3>
      <h5>Job Title : ${this.jobTitle}</h5>
    </div>
    `;
  }
}
