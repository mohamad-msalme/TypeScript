"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolTarget = void 0;
var ConsolTarget = /** @class */ (function () {
    function ConsolTarget() {
    }
    ConsolTarget.prototype.print = function (report) {
        console.log(report);
    };
    return ConsolTarget;
}());
exports.ConsolTarget = ConsolTarget;
