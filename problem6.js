const inventory = require('./cars');

let BMWAndAudi =[];
console.log();

for (let i = 0; i < inventory.length; i++){
    if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi'){
        BMWAndAudi.push(inventory[i])
     }
}


console.log (JSON.stringify(BMWAndAudi));