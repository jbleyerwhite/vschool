
function checkTypes(arr) {
    // Nested for loop to compare it against the initial data type  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
         // if !== firstType return false
        if(typeof arr[i][j] !== typeof arr[0][0]){
          return false
        }
      }
    }
    // return true
    return true
}


const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
checkTypes(multiD1)  


const multiD2 = [[true,false,true],[false,false,true]]
checkTypes(multiD2) 





