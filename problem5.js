const inventory = require('./cars');
let oldCars =[];
console.log(); 
for (let i = 0; i < inventory.length; i++){
    if (inventory[i].car_year < 2000) {
        oldCars.push(inventory[i].car_year)
    }
}


console.log(oldCars.length);