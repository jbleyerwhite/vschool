var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

var name = wizards.forEach(function(arr){
    return arr
})
console.log(wizards)
//#1:  Log to the console every wizards name


var wizards 


//#2:  Add isAlive property to every wizard & set to TRUE
var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]



  var wAlive = wizards.forEach(function(wizard){
    wizard["isAlive"] = true;
})
console.log(wizards)


//#3 new array, alignment = value
var newArr = wizards.filter(function(wiz){
    if (wiz.alignment === "neutral good"){
        return wiz
    }
})
console.log(newArr)

//#4 findIndex of a wizard w align: lawful good
var newArr1 = wizards.findIndex(function(wiz){
    return wiz.alignment === "lawful good" 
})
console.log(newArr1)

//#5 return a boolean - whether/not wizards are alive
// wizards[0].isAlive = false
var newArr2 = wizards.every(function(wiz){
    return wiz['isAlive'] === true;
})
console.log(newArr2)

//#6
var newArr3 = wizards.some(function(wiz){
    return wiz['alignment'] === "neutral good"
})
console.log(newArr3)

//#7  ck align - each & kill all neut good wiz
var newArr4 = wizards.filter(function(wiz){
    if (wiz.alignment === "neutral good"){
         wiz['isAlive'] = false;
    }
})
console.log(wizards)

//#8  boolean all wiz isAlive
var newArr5 = wizards.every(function(wiz){
    return wiz['isAlive'] === true;
})
console.log(newArr5)


//#9  boolean - if some of the wiz r alive
var newArr6 = wizards.some(function(wiz){
    return wiz['isAlive'] === true
})
console.log(newArr6)




//var numbers = [1, 23, 54, 23, 9]
//var ourNum = numbers.find(function(num) {
	//return num === 23;