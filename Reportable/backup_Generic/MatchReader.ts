import { dateStringToDate } from "./helper";
import { CsvFileReader } from "./CsvFileReader";

enum MatchIndex {
  MatchDate, // MatchDate = 0
  HomeTeamName,
  AwayTeamName,
  HomeTeamGoals,
  AwayTeamGoal,
  MatchResult,
  StadName,
}
type matchData = [Date, string, string, number, number, MatchResult, string];

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

export class MatchReader extends CsvFileReader<matchData>{
  constructor(fileName: string){
    super(fileName);
  }

  mapRow(row : string[]): matchData {
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
}