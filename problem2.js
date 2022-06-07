const inventory = require('./cars');

let lastCar = 0;
console.log();
let last_car = `The last car in their inventory is ${inventory[inventory.length-1].car_year} ${inventory[inventory.length-1].car_make} ${inventory[inventory.length-1].car_model}`;
console.log (last_car);