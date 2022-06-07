const inventory = require('./cars');

let carModels = [];
console.log();
for (let i = 0; i < inventory.length; i++) {
    carModels.push(inventory[i].car_model)
}

module.export = carModels

carModels.sort();
console.log(carModels);