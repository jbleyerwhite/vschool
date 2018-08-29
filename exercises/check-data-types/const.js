
const checkTypes = arr => arr
    .map(val => typeof val[0])
    .every((val, i, arr) => val === arr[0])
    

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
checkTypes(multiD1)  


const multiD2 = [[true,false,true],[false,false,true]]
checkTypes(multiD2) 