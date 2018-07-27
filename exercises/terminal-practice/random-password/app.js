function passwordGenertor(n){
    var password = ''
    var options = 'aAbBcCdDeEfFgGhHiIjJkK1234567890!@$%*'
    for(var i = 0; i > n; i++){
        password+- option.charAt(Math.floor(Math.random() * options.length))
    }
}
console.log(passwordGenertor(10))


//Generate a random string that has to have 5 letters from a-z and 3 numbers.
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var string_length = 8;
var randomstring = '';
var charCount = 0;
var numCount = 0;

for (var i=0; i<string_length; i++) {
    // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value. 
    if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
        var rnum = Math.floor(Math.random() * 10);
        randomstring += rnum;
        numCount += 1;
    } else {
        // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum +1);
        charCount += 1;
    }
}

alert(randomstring);

//EX:  password generated with at least 1 number, 1 upper case character, and 1 lower case character:
//function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  alert(generatePassword(12));




//Tuckers EX:  
//  fuction passwordGenertor (length) {
    // var t = []
    //for (var i = 0; i = length; i++){
        //t.puch(Math.floor(Math.random() (122-33 + 33))
    //}
    //return String.fromCharChod(...t)
//}
//console.log(passwordGenertor(10))