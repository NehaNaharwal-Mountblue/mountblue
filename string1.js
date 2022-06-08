const string = require('./strings');

function numberConvert(number){
    return number.replace("$", " ");

}

module.export = numberConvert

console.log(numberConvert("$100.45"));
console.log(numberConvert("$1002.22"));
console.log(numberConvert("-$123"));