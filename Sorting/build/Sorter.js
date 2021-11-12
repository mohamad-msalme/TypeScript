"use strict";
// export interface Sortable {
//   get length(): number
//   compare(prevIndex: number, nextIndex: number): boolean;
//   swap(prevIndex: number, nextIndex: number): void
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.length; i++) {
            for (var prev = 0; prev < (this.length - 1) - i; prev++) {
                var next = prev + 1;
                if (this.compare(prev, next))
                    this.swap(prev, next);
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
