const inventory = require('./cars');

function lastCar(inventory, id){
    for(let i= 0; i< inventory.length-1; i++){
        if(inventory[i].id === id)
        return `car ${id} is a ${inventory[i].car_make} ${inventory[50].car_model}`;

    }
}


console.log(lastCar(inventory,50));