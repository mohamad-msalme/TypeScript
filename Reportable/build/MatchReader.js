"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var helper_1 = require("./helper");
var MatchData_1 = require("./MatchData");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.data = [];
        this.load();
    }
    MatchReader.fromCsv = function (fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    };
    MatchReader.prototype.load = function () {
        this.data = this.reader.data.map(this.stringRowToMatchData);
    };
    MatchReader.prototype.stringRowToMatchData = function (row) {
        return [
            helper_1.dateStringToDate(row[MatchData_1.MatchIndex.MatchDate]),
            row[MatchData_1.MatchIndex.HomeTeamName],
            row[MatchData_1.MatchIndex.AwayTeamName],
            parseInt(row[MatchData_1.MatchIndex.HomeTeamGoals]),
            parseInt(row[MatchData_1.MatchIndex.AwayTeamGoal]),
            row[MatchData_1.MatchIndex.MatchResult],
            row[MatchData_1.MatchIndex.StadName]
        ];
    };
    Object.defineProperty(MatchReader.prototype, "matches", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    return MatchReader;
}());
exports.MatchReader = MatchReader;
