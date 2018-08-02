
//create an array - that will host the largest number in the array

//write a function that takes the array #'s & RETURNS the largest # (w/out Math.max)

function largestNum(array) {
    var num = 0
  //create a FOR Loop that will iterate through the array
    for(var i = 0; i < array.length; i++) {
    
    //the starting point, index 0, corresponds to the array
        if(array[i] > num) {
            num = array[i]
            }  
        }
    return num;
}

console.log(largestNum([3, 5, 2, 8, 1]))


//NOTES:
//return largest # in the array
//3 Approaches:  1)FOR Loop 2)REDUCE() Method & 3)MathMax

        //with MATH.MAX:
                //var num = [4, 5, 1, 3];
                //console.log(Math.max.apply(null, num))

console.log(Math.max(3, 5, 2, 8, 1))