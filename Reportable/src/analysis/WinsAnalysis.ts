import { matchData } from "../MatchData";
import { Analyzer } from "../Summary";
import {MatchResult, MatchIndex} from "../MatchData"

export class WinsAnalysis implements Analyzer{

  constructor(public teamName: string){}

  run(matches: matchData[]): string {
    let wins = 0;
    matches.forEach((match: matchData) => this.isTeamWin(match) && wins++)
    return `${this.teamName} Team wins ${wins} match`;
  }

  isHomeTeamWin(match: matchData): boolean{
    return match[MatchIndex.HomeTeamName] === this.teamName && match[MatchIndex.MatchResult] === MatchResult.HomeWin
  }

  isAwayTeamWin(match: matchData): boolean {
    return match[MatchIndex.AwayTeamName] === this.teamName && match[MatchIndex.MatchResult] === MatchResult.AwayWin
  }

  isTeamWin(match: matchData): boolean {
    return this.isAwayTeamWin(match) || this.isHomeTeamWin(match);
  }
}