import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsWithConsoleReport('Man United');

summary.buildAndPrintReport(matchReader.matches);