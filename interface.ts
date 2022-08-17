interface cars {
  name: string;
  model: Date;
  color: string;
  sunroof: string;
}
enum sunroof {
  yes,
  no,
}
let car1: cars = {
  name: 'supra',
  model: new Date('2019'),
  color: 'red',
  sunroof: sunroof[1],
};
console.log(car1.name + ' of ' + car1.model + ' is of color ' + car1.color);
console.log(sunroof.yes);
