// STRUNCTION:  like a function but for a String!
//Practicing string methods:  Concat, indeOf, lastIndexOf, slice, split, toLowerCase, toUpperCase, substr

function myGreeting(str1, str2) {
   var str1 = 'Merry Christmas';
   var str2 = "Happy New Year";
    return str1.toUpperCase()
}
console.log(myGreeting())



function myGreeting1(str1, str2) {
    return str1.toUpperCase().slice(0, 2) +  str2.toLowerCase()
    }
    console.log("Merry Christmas",  "Happy New Year!")
    console.log("Happy", "Birthday")
    console.log("Happy", "Easter")

