export enum MatchIndex {
  MatchDate, // MatchDate = 0
  HomeTeamName,
  AwayTeamName,
  HomeTeamGoals,
  AwayTeamGoal,
  MatchResult,
  StadName,
}

export type matchData = [Date, string, string, number, number, MatchResult, string];

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}