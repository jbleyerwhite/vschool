var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option !== 'fight bears'){
  option = ask.keyInSelect(options, "What would you like to do today?");
  if (options[option] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (options[option] === 'shoot guns') {
    console.log("You shoot guns");
  } else if (options[option] === 'fight bears'){
    option = 'fight bears';
  } else {
    console.log("Please choose a different option")
  }
}

console.log("You fought a bear and got beat up!");


//This program should have the user:

//PICK FLOWERS and and KEEP LOOPING if they SELECT 'pick flowers', 
//Shoot guns and and KEEP LOOPING IF they SELECT 'shoot guns', 
//Fight bears and end the program if they select 'fight bears'.

//It should tell them to select an option if they choose 'Cancel'