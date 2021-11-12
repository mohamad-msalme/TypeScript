import { matchData } from "./MatchData";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { ConsolTarget } from "./reportTarget/ConsoleTarget";
import { HtmlTarget } from "./reportTarget/HtmlTarget";
export interface Analyzer {
  run(matches: matchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {

  static winsWithConsoleReport(teamName: string): Summary{
    return new Summary(new WinsAnalysis(teamName), new ConsolTarget())
  }

  static winsWithHtmlReport(teamName: string, fileNameOutput: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlTarget(fileNameOutput))
  }

  constructor(private analyzer: Analyzer, private outputTarger: OutputTarget){}

  buildAndPrintReport(matches: matchData[]): void {
    this.outputTarger.print(this.analyzer.run(matches));
  }
}