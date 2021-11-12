import { OutputTarget } from "../Summary";

export class ConsolTarget implements OutputTarget{
 
  print(report: string) : void {
    console.log(report);
  }
}