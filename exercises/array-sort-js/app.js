// SORT an Array lowToHigh
var numbers = [1, 3, 5, 2, 90, 20]

var lowToHigh = numbers.sort(function(num1, num2){
    return num1 - num2;
})
console.log(numbers)

// SORT an Array highToLow
var numbers = [1, 3, 5, 2, 90, 20]

var highToLow = numbers.sort(function(num1, num2){
    return num2 - num1;
})
console.log(numbers)

// SORT an Array of Strings - short to long
var arrStr = ["dog", "wolf", "by", "family", "eaten"]
var lengthSort = arrStr.sort(function(a, b){
        return a.length - b.length;
})
console.log(arrStr)

// SORT Array A - Z alphabetically
var arrStr = ["dog", "wolf", "by", "family", "eaten"]

var alphabetically = arrStr.sort(function(a,b){
    return a > b;
})
console.log(arrStr)

//SORT objects in Array by Age
var people = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]
people.sort(function(a, b){
    return a.age - b.age
})
console.log(people)

