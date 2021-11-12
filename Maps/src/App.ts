import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

class App {
  startApp(): void {
    const googleMap = new CustomMap('map');
    googleMap.addMarker(new User());
    googleMap.addMarker(new Company());
  }
}

export const app = new App();
