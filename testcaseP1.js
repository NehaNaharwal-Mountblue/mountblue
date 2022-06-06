function getCarById (inventory,id) {
    if(!inventory||!id) return 'improper argument passed'
    for(let i=0;i<inventory,length;i++) {
        if(inventory[i].id === id)
        return `car  is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`
    }
}

module.export = getCarById

console.log(getCarById());
console.log(getCarById([], 33))