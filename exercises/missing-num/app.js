//  Create a function that identifies the range of numbers within a given array
//  Have the function return all numbers missing within the range

function findMissingNo(arr) {
//const findMissingNo = (arr) => THIS IS THE ES6 verision
    arr.sort(function(a, b){
//arr.sort((a,b) => a - b)  THIS IS THE ES6 version
        return a - b;
    })
    for(let i = 0; i < arr.length; i++) {
        if(arr[i + 1] !== arr[i] + 1){
            return arr[i] + 1
        }

    }
}

console.log(findMissingNo([2, 1, 3, 5]))
console.log(findMissingNo([12, 10, 9]))
console.log(findMissingNo([-3, 0, -2, 3, 2, -1]))
console.log(findMissingNo([3, 5, 4, 8, 1, 2, 7]))

//ES6 version of the above:
//  const findMissingNo = (arr) => {
   //   arr.sort((a, b) => a - b)
    //  for(let i = 0; i < arr.length; i++){
      //    if(arr[i + 1] !== arr[i] + 1){
        //  return arr[i] + 1
      //    }
    //    }  
  //    }
