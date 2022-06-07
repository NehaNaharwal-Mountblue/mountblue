const inventory = require('./cars');
const inventory = require('./problem4')
let oldCars =[];
console.log(); 
for (let i = 0; i < inventory.length; i++){
    if (inventory[i].car_year < 2000) {
        oldCars.push(inventory[i].car_year)
    }
}
module.export = oldCars

console.log(oldCars.length);