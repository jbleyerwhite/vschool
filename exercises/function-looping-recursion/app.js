// let count = 0
// const looper = (count => {
//     if(count < 10){
//         console.log(count)
//         return looper(count + 1)
//     }
// })

//FUNCTION LOOPER:
// function looper(count){
//     if(count < 10){
//         console.log(count)
//         looper(count + 1)
//     }
// }
// console.log(looper(count))

// }

const threes = (n, counter => {
    if(n % 3 ===0 && n !== 0){ 
        console.log(n, counter)
        return threes(n/3, counter + 1)
} else if(n + 1 % 3 === 0){
}




// Write a recursive function that takes two integers, n and counter as parameters and does the following:

// If the n is divisible by three, divide it by three and call the function again, providing the new value as n and counter + 1 as counter

// If not, either add or subtract 1 to a get a new value that is divisible by three and repeat step 1.

// If n is one, simply return the value counter.