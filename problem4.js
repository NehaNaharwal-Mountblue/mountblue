const inventory = require('./cars');

let carYears = [];
console.log();
for (let i = 0; i < inventory.length; i++) {
   carYears.push(inventory[i].car_year);
}


console.log(carYears);