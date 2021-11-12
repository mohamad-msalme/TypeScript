"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/**
 * this function check if the formate of date is yy/mm/dd or dd/mm/yy
 * @param stringDate : string
 * @returns boolean
 */
var isValidDate = function (stringDate) { return !(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(stringDate)); };
/**
 * convert the date as string to Date
 * @param stringDate string
 * @returns Date
 */
var dateStringToDate = function (stringDate) {
    return isValidDate(stringDate)
        ? new Date(stringDate)
        : new Date(stringDate
            .split('/')
            .reverse()
            .map(function (value, index) { return index === 1 ? +value - 1 : +value; })
            .join('/'));
};
exports.dateStringToDate = dateStringToDate;
