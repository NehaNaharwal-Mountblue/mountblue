const string = require('./strings');

function convertToString(arr){
    return arr.toString(" ").replace(/,/g," ");
}

module.export = convertToString

console.log(convertToString(["the", "quick", "brown", "fox"]));
