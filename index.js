"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const monthsOfTheYear_1 = __importDefault(require("./monthsOfTheYear"));
const seasons_1 = __importDefault(require("./seasons"));
const MonthsNames = Object.values(monthsOfTheYear_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(MonthsNames, "Choose a Month of the Year");
const month = Object.values(monthsOfTheYear_1.default)[choiceMonth];
const seasonsSouth = {
    [seasons_1.default.autumn]: [monthsOfTheYear_1.default.March, monthsOfTheYear_1.default.April, monthsOfTheYear_1.default.May, monthsOfTheYear_1.default.June],
    [seasons_1.default.winter]: [monthsOfTheYear_1.default.June, monthsOfTheYear_1.default.July, monthsOfTheYear_1.default.August, monthsOfTheYear_1.default.September],
    [seasons_1.default.spring]: [monthsOfTheYear_1.default.September, monthsOfTheYear_1.default.October, monthsOfTheYear_1.default.November, monthsOfTheYear_1.default.December],
    [seasons_1.default.summer]: [monthsOfTheYear_1.default.December, monthsOfTheYear_1.default.January, monthsOfTheYear_1.default.February, monthsOfTheYear_1.default.March],
};
const seasonsNorth = {
    [seasons_1.default.spring]: seasonsSouth[seasons_1.default.autumn],
    [seasons_1.default.summer]: seasonsSouth[seasons_1.default.winter],
    [seasons_1.default.autumn]: seasonsSouth[seasons_1.default.spring],
    [seasons_1.default.winter]: seasonsSouth[seasons_1.default.summer],
};
const hemispheres = {
    North: seasonsNorth,
    South: seasonsSouth,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Choose a hemisphere");
const hemisphere = Object.values(hemispheres)[choiceHemisphere];
console.log(`Month: \n${month}`);
console.log('Hemisphere:');
console.log(hemisphere);
