"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchData_1 = require("../MatchData");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var wins = 0;
        matches.forEach(function (match) { return _this.isTeamWin(match) && wins++; });
        return this.teamName + " Team wins " + wins + " match";
    };
    WinsAnalysis.prototype.isHomeTeamWin = function (match) {
        return match[MatchData_1.MatchIndex.HomeTeamName] === this.teamName && match[MatchData_1.MatchIndex.MatchResult] === MatchData_1.MatchResult.HomeWin;
    };
    WinsAnalysis.prototype.isAwayTeamWin = function (match) {
        return match[MatchData_1.MatchIndex.AwayTeamName] === this.teamName && match[MatchData_1.MatchIndex.MatchResult] === MatchData_1.MatchResult.AwayWin;
    };
    WinsAnalysis.prototype.isTeamWin = function (match) {
        return this.isAwayTeamWin(match) || this.isHomeTeamWin(match);
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
