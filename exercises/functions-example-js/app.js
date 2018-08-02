//Write a function that accepts 3 numbers as parameters, and returns the sum.

//understnad the problem
//pseudo code-how do I want to approach? / make a game
//execute your plan
//look back-other ways to solve it

function findTheBiggest(num1,num2,num3) {
  return Math.max(num1, num2,num3)
}

// if sstatement:  compared 1 to 2 to 3
// of state,emt"  cp,[ared 2 tp 3 amd 1
// if statement:  compared 3 to 1 and 2]


console.log(findTheBiggest([20,5, 40])) //30
console.log(findTheBiggest([21, 22, 3])) //22
console.log(findTheBiggest()) // 1000

//Write a function that accepts 3 numbers as parameters, and returns the sum.
function findTheBiggest(arr) {

    //save biggest as varialbe
    var hongKong = 0
    //itereate through the arr with a for loop
    for(var i = 0; i < arr.length; i++) {
 // if statement to check the urrent number
        if(arr[i] . hongKong){
//compare current number to the current largest number (saved as a variable)
            hongKong = arr[i]
        }
    }
    return hongKong
    }

    console.log((findTheBiggest)(20, 5, 40)) //30
    console.log((findTheBiggest)(21, 22, 3)) //22
    console.log(findTheBiggest()) // 1000

