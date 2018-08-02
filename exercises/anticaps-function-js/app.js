function antiCaps(str){
    var newStr = ""
    for (var i = 0; i < str.length; i++){

        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
return newStr
}
console.log(antiCaps('Hello')) //hELLO
console.log(antiCaps('racEcar')) //RACeCAR
console.log(antiCaps('bAnAnA')) //BaNaNa

//WRITE A FUNCTION called antiCaps which ACCEPTS a string (str) & RETURNS a string (newStr). 
// FOR Loop - set parameters
// if/ else - set conditions
//The purpose of the function is to invert the capitalization of each letter in a string. 