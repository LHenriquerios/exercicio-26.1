"use strict";
var seasons;
(function (seasons) {
    seasons["summer"] = "summer";
    seasons["spring"] = "spring";
    seasons["autumn"] = "autumn";
    seasons["winter"] = "winter";
})(seasons || (seasons = {}));
console.log(seasons.summer);
console.log(seasons['spring']);
console.log(seasons.autumn);
console.log(seasons['winter']);
