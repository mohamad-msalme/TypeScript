"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.MatchIndex = void 0;
var MatchIndex;
(function (MatchIndex) {
    MatchIndex[MatchIndex["MatchDate"] = 0] = "MatchDate";
    MatchIndex[MatchIndex["HomeTeamName"] = 1] = "HomeTeamName";
    MatchIndex[MatchIndex["AwayTeamName"] = 2] = "AwayTeamName";
    MatchIndex[MatchIndex["HomeTeamGoals"] = 3] = "HomeTeamGoals";
    MatchIndex[MatchIndex["AwayTeamGoal"] = 4] = "AwayTeamGoal";
    MatchIndex[MatchIndex["MatchResult"] = 5] = "MatchResult";
    MatchIndex[MatchIndex["StadName"] = 6] = "StadName";
})(MatchIndex = exports.MatchIndex || (exports.MatchIndex = {}));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
