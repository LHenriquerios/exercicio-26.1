import readline from 'readline-sync';
import Months from "./monthsOfTheYear";
import Seasons from "./seasons";

const MonthsNames = Object.values(Months);
const choiceMonth = readline.keyInSelect(MonthsNames, "Choose a Month of the Year");
const month = Object.values(Months)[choiceMonth];

const seasonsSouth = {
    [Seasons.autumn]: [Months.March, Months.April, Months.May, Months.June],
    [Seasons.winter]: [Months.June, Months.July, Months.August, Months.September],
    [Seasons.spring]: [Months.September, Months.October, Months.November, Months.December],
    [Seasons.summer]: [Months.December, Months.January, Months.February, Months.March],
};


const seasonsNorth = {
    [Seasons.spring]: seasonsSouth[Seasons.autumn],
    [Seasons.summer]: seasonsSouth[Seasons.winter],
    [Seasons.autumn]: seasonsSouth[Seasons.spring],
    [Seasons.winter]: seasonsSouth[Seasons.summer],
};

const hemispheres = {
    North: seasonsNorth,
    South: seasonsSouth,
};

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Choose a hemisphere");
const hemisphere = Object.values(hemispheres)[choiceHemisphere]

console.log(`Month: \n${month}`);
console.log('Hemisphere:');
console.log(hemisphere);

