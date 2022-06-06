const inventory = require('./cars');

let lastCar = 0;
console.log();
function last_car(inventory){
    for(let i = 0; i< inventory.length; i++){
        return `The last car in their inventory is ${inventory[inventory.length-1].car_year} ${inventory[inventory.length-1].car_make} ${inventory[inventory.length-1].car_model}`;
    }
}
module.export = last_car

console.log (last_car(inventory));