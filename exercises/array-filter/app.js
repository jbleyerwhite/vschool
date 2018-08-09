//Given an array of #'s, return a new array that has only the numbers that are 5 or greater
function fiveAndGreaterOnly(arr) {
    var overFiveArray = arr.filter(function(num){
        if(num >= 5){
            return num
        }
    })
    return overFiveArray
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]))

//Given an array of #'s, retrun a new array that only includes even numbers
function evensOnly(arr) {
    var evenNumsArray = arr.filter(function(num){
        if(num % 2 === 0){
            return num
        }
    })
    return evenNumsArray
}
console.log(evensOnly([3, 6, 8, 2]))


//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
function fiveCharactersOrFewerOnly(arr) {
    var strLengthArray = arr.filter(function(str){
        if(str.length <= 5){
            return str
        }
    
    })
    return strLengthArray
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "candy"]))


//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

function peopleWhoBelongToTheIlluminati(arr) {
    var filteredOut = arr.filter(function(value){
        if(value.member === true)
            return value
    })
    return filteredOut
}
console.log(peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]))

//Filter out all the people who are not old enough to see the Matrix (younger than 18)

function ofAge(arr) {
    var filteredOut = arr.filter(function(value){
        if(value.age <= 18)
        return value
    })
    return filteredOut
}
console.log(ofAge([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
