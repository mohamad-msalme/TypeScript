import {OutputTarget} from "../Summary"
import {writeFileSync} from "fs"

export class HtmlTarget implements OutputTarget {

  constructor(private outputFileName: string){}

  print(report: string): void{
    const html = `
    <div>
      <h2>Analysis Output</h2>
      <div>${report}</div>
    </div>`;
    writeFileSync(`${this.outputFileName}.html`, html);
  }
}