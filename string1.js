const string = require('./strings');

function numberConvert(number){
    return number.replace("$", " ");

}

console.log(numberConvert("$100.45"));
console.log(numberConvert("$1002.22"));