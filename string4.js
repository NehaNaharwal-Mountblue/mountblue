const string = require('./strings');

const person = {first_name: "JoHN", middle_name: "doe", last_name: "SMith"};

function toTitleCase(person) {
    return person.toLowerCase().split(' ').map(function (name) {
      return (name.charAt(0).toUpperCase() + name.slice(1));
    }).join(' ');
  }

  module.export = toTitleCase
  
  console.log(toTitleCase(person.first_name + " " + person.last_name));
  console.log(toTitleCase(person.first_name + " " + person.middle_name+ " " + person.last_name));

