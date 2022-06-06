const inventory = require('./cars');

function getCarById(inventory, id){
    for (let i=0; i<inventory.length; i++)
    {
        if(inventory[i].id === id)
        return `Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`
      
    }
    
}

console.log(getCarById(inventory, 33));
