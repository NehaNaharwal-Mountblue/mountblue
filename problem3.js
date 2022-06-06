const inventory = require('./cars');

let carModels = [];
carModels.sort();
console.log();
for (i = 0; i < inventory.length; i++) {
    carModels.push(inventory[i].car_model)
}

module.export = carModels

console.log(carModels);