// var words = ["dog", "cat", "camel", "unicorn"];

function addS(arr){
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            return 'no numbers' 
        } else if (arr[i].endsWith('s')){
            newArr.push(arr[i])
        } else {
            newArr.push(`${arr[i]}s`)
        }
    }
        return newArr
        //return outside of the function
}
module.exports = {
    addS:addS
}

// 'dogs'
 // arr [i].lastIndexOf('s')

            
















//assert(actual, expected)

// var assert =function(actual, expected){
//     try{
//         if(actual !== expected){
//         throw {
//             type: "Fail",
//             details: { actual: actual, expected: expected}
//         }
//     } else {
//         console.log("Success", { type: "Test Passed", 
//             details: { actual: actual, expected: expected}})
//     }
// }
//     catch(err){
//         cosole.log(err)
//     }
// }

// assert(true, true)
// assert('abc', 'abc')
// assert(123, 123)

// function addTwoNums(num1, num2){
//     return num1 + num2
// }
// assert(addTwoNums(1, 2), 3)
// assert(addTwoNums(5, 20), 25)