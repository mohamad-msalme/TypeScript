import { CsvFileReader } from "./CsvFileReader";
import { DataReader } from "./CsvFileReader";
import { dateStringToDate } from "./helper";
import {matchData, MatchResult, MatchIndex} from "./MatchData"


export class MatchReader {
  private data: matchData[] = []

  static fromCsv(fileName: string): MatchReader{
    return new MatchReader( new CsvFileReader(fileName))
  }

  constructor(private reader : DataReader){
    this.load();
  }

  private load(): void {
    this.data = this.reader.data.map(this.stringRowToMatchData)
  }

  private stringRowToMatchData(row : string[]): matchData {
    return [
      dateStringToDate(row[MatchIndex.MatchDate]), 
      row[MatchIndex.HomeTeamName], 
      row[MatchIndex.AwayTeamName], 
      parseInt(row[MatchIndex.HomeTeamGoals]), 
      parseInt(row[MatchIndex.AwayTeamGoal]), 
      row[MatchIndex.MatchResult] as MatchResult,  
      row[MatchIndex.StadName]  
    ]
  }

  get matches(): matchData[] {
    return this.data
  }
}