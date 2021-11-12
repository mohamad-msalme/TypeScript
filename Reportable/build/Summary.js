"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analysis/WinsAnalysis");
var ConsoleTarget_1 = require("./reportTarget/ConsoleTarget");
var HtmlTarget_1 = require("./reportTarget/HtmlTarget");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarger) {
        this.analyzer = analyzer;
        this.outputTarger = outputTarger;
    }
    Summary.winsWithConsoleReport = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleTarget_1.ConsolTarget());
    };
    Summary.winsWithHtmlReport = function (teamName, fileNameOutput) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlTarget_1.HtmlTarget(fileNameOutput));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        this.outputTarger.print(this.analyzer.run(matches));
    };
    return Summary;
}());
exports.Summary = Summary;
