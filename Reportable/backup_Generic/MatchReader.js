"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var helper_1 = require("./helper");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchIndex;
(function (MatchIndex) {
    MatchIndex[MatchIndex["MatchDate"] = 0] = "MatchDate";
    MatchIndex[MatchIndex["HomeTeamName"] = 1] = "HomeTeamName";
    MatchIndex[MatchIndex["AwayTeamName"] = 2] = "AwayTeamName";
    MatchIndex[MatchIndex["HomeTeamGoals"] = 3] = "HomeTeamGoals";
    MatchIndex[MatchIndex["AwayTeamGoal"] = 4] = "AwayTeamGoal";
    MatchIndex[MatchIndex["MatchResult"] = 5] = "MatchResult";
    MatchIndex[MatchIndex["StadName"] = 6] = "StadName";
})(MatchIndex || (MatchIndex = {}));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader(fileName) {
        return _super.call(this, fileName) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            helper_1.dateStringToDate(row[MatchIndex.MatchDate]),
            row[MatchIndex.HomeTeamName],
            row[MatchIndex.AwayTeamName],
            parseInt(row[MatchIndex.HomeTeamGoals]),
            parseInt(row[MatchIndex.AwayTeamGoal]),
            row[MatchIndex.MatchResult],
            row[MatchIndex.StadName]
        ];
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
