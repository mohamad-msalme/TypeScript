"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTarget = void 0;
var fs_1 = require("fs");
var HtmlTarget = /** @class */ (function () {
    function HtmlTarget(outputFileName) {
        this.outputFileName = outputFileName;
    }
    HtmlTarget.prototype.print = function (report) {
        var html = "\n    <div>\n      <h2>Analysis Output</h2>\n      <div>" + report + "</div>\n    </div>";
        fs_1.writeFileSync(this.outputFileName + ".html", html);
    };
    return HtmlTarget;
}());
exports.HtmlTarget = HtmlTarget;
