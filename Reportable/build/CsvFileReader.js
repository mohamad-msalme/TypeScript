"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
        this.read();
    }
    CsvFileReader.prototype.read = function () {
        this.data =
            fs_1.readFileSync(this.fileName, { encoding: 'utf-8' })
                .split('\n')
                .map(function (row) { return row.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
