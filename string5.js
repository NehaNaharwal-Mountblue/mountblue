const string = require('./strings');

// const arr = ["the", "quick", "brown", "fox"].toString(" ").replace(/,/g," ");

// console.log(arr);

function convert(arr){
    return arr.toString(" ").replace(/,/g," ");
}
console.log(convert(["the", "quick", "brown", "fox"]));
