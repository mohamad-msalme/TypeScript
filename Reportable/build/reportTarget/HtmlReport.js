"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = require("fs");
var HtmlReport = /** @class */ (function () {
    function HtmlReport(outputFileName) {
        this.outputFileName = outputFileName;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n    <div>\n      <h2>Analysis Output</h2>\n      <div>" + report + "</div>\n    </div>";
        fs_1.writeFileSync(this.outputFileName + ".html", html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
