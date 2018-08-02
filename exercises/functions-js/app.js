//Write a function that accepts two numbers as parameters, and returns the sum

function addNum(x, y) { 
    return x + y;
}
console.log(addNum("apple and ", "a bannana!"))
console.log(addNum(10, 20))

//Write a function that accepts 3 #'s as parameters & returns the largest of those numbers  *use math.max function:  1.name function w 3 #'s as parameters, then, in curly braces, tell it what to do:  return, math.max, when I give u 3 number - Math.max (x, y, z).  then console.log what you told it to do with 3 #'s

function largestNum(Num1, Num2, Num3) {
    return Math.max (Num1, Num2, Num3);
}
console.log(Math.max(4, 9, 7))


//same as above using an array (use '...array' in the function for math.max :
function larNum(array) {
    return Math.max(...array)
}
console.log(larNum([9, 10, 2, 4]))

// without pramiters:  use '...array' in the function for math.max :
var array1 = [9, 10, 2, 4]

function largNum() {
    return Math.max(...array1)
}

console.log(largNum(array1))


//Write a function that accepts 1 number as a parameter & returns whether that number is even or odd  *Return "even" or "odd")...use if/else.  1.  name fumction w 1 parameter (num). 2.  use if/else using (parameter % 2)...take #, % in JS, takes num % 2  EX:  (divide my # by 2 & if that equals out to 2 then 'even') else 'return that it's odd

function checkNum(num) {
   if (num % 2 === 0) {
        return ("even");
   } else {
        return ("odd");
    }
}
console.log(checkNum("hi"))

//usig the MODULO OPERATOR % w/out using an if/else w odd/even
function checkNum(num) {
    return num % 2
 }
 console.log(checkNum(7))


//Write a function that accepts a string as a parameter
//If the length of the string is <= to 20 characters long, return the string concatenated with itself (string + string). 
//If the string is more than 20 characters long, return the first half of the string. ** can use substr as method or slice

function stringLength(string) {
    if (string.length <= 20) {
        return string + " and " + string
    } else {
        return string.slice(0, string.length / 2)
    }
}

console.log(stringLength("Merry Merry"))
console.log(stringLength("Merry Christmas! Happy New Year!"))

