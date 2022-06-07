"use strict";
var monthsOfTheYear;
(function (monthsOfTheYear) {
    monthsOfTheYear["January"] = "January";
    monthsOfTheYear["February"] = "February";
    monthsOfTheYear["March"] = "March";
    monthsOfTheYear["April"] = "April";
    monthsOfTheYear["May"] = "May";
    monthsOfTheYear["June"] = "June";
    monthsOfTheYear["July"] = "July";
    monthsOfTheYear["August"] = "August";
    monthsOfTheYear["September"] = "September";
    monthsOfTheYear["October"] = "October";
    monthsOfTheYear["November"] = "November";
    monthsOfTheYear["December"] = "December";
})(monthsOfTheYear || (monthsOfTheYear = {}));
console.log(monthsOfTheYear["January"]);
