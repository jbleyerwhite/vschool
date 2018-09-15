// Duplicate Count 

const duplicateCount = str => {
    //make it lower case
    let dupArr = [];
    const strCopy = str.toLowerCase()
    for(let i = 0; i < strCopy.length; i++){
        let firstIndex = strCopy.indexOf(strCopy[i])
        let lastIndex = strCopy.indexOf(strCopy[i])
        //compare indexes
        if(firstInde !== lastIndex){
            if(dupArr.indexOf(str[i]) === -1){
                // if it is a duplicate
                // push the duplicat into the duplicate array
                dupArr.push(str[i])
            }
        }
    }
    // return the amount of duplicate results
    return dupArr.length
}

console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibilites"))