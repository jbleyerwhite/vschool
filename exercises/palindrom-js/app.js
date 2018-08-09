function isPalindrome(str){
    var without = str.replace(/[^0-9a-z]/gi, "");
    var arr = without.split("");
    var flip = arr.reverse().join("");
    
    return flip.toLowerCase() === without.toLowerCase()
  }

console.log(isPalindrome("Star Rats!"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("I madam, I made radio!  So I dared! Am I mad?? Am I?"))



// function isPalindrome(str) {
//     str = str.split("");

//     var str2 = str.filter(function(x){ 
//         if(x !== ' ' && x !== ',') {
//             return x;
//         }
//     });

//     return console.log(str2.join('').toLowerCase()) == console.log(str2.reverse().join('').toLowerCase());
// };

// console.log(isPalindrome("Star Rats!"));
// console.log(isPalindrome("palindrome"));
// console.log(isPalindrome("I madam, I made radio!  So I dared! Am I mad?? Am I?"))



