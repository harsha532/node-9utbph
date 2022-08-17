var sunroof;
(function (sunroof) {
    sunroof[sunroof["yes"] = 0] = "yes";
    sunroof[sunroof["no"] = 1] = "no";
})(sunroof || (sunroof = {}));
var car1 = {
    name: 'supra',
    model: new Date('2019'),
    color: 'red',
    sunroof: sunroof[1]
};
console.log(car1.name + ' of ' + car1.model + ' is of color ' + car1.color);
console.log(sunroof.yes);
