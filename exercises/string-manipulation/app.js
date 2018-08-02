var ask = require('readline-sync')

var name = ask.question("What is your name?")

console.log("Cool " + name + ", " + "it's nice to meet you.")

var age = ask.question("What is your age?")
console.log("Wow...you look great for " + age + " years old!")

var color = ask.question("What is your favorite color?")     
// return color toUpperCase:
console.log("Great!  " + color.toUpperCase() + " is a lovely color!")

var longString = ask.question("Please enter a message at least 20 characters long")
// create the var for longString and then divide the longString.lenght by 2)
console.log("Half of your message is " + longString.slice(longString.length/2))

var number = ask.question("Please give me a number between 1-20?")
console.log(longString.slice(number))
