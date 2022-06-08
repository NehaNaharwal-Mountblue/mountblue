const string = require('./strings');

function convert(arr){
    return arr.toString(" ").replace(/,/g," ");
}
console.log(convert(["the", "quick", "brown", "fox"]));
