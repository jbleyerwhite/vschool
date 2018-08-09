//install readline in dev
//readlinge METHODS:  .question, keyIn, keyInSelect
//va , .keyIn

var readline = require("readline-sync");

function ceasarCipher(str, shift){
    // Declare empty string to build
    var encrypted = "" 
    // Declare a variable that holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    // Loop/Iterate through the string
    for(var i = 0; i < str.length; i++){
        // check letter exists in the alphabet
        if(alphabet.indexOf(str[i]) !== -1){
            var currentIndex = alphabet.indexOf(str[i])
            // shift it the appropiate amount to the right 
            encrypted += alphabet[ (currentIndex + shift) % 26 ]
        } else {
            encrypted += str[i]
        }
    }
    // return final encrypted string
    return encrypted
}

console.log(ceasarCipher(phrase, shift))
