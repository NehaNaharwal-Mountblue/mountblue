const string = require('./strings');


function toTitleCase(person) {
    return person.toLowerCase().split(' ').map(function (name) {
      return (name.charAt(0).toUpperCase() + name.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase(person.first_name + " " + person.last_name));
  console.log(toTitleCase(person.first_name + " " + person.middle_name+ " " + person.last_name));

