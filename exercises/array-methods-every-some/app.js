const some = (arr, func) => {
    
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]));
        return true;
    }
}

console.log(some(["ben", "jacob", "bob"], (name) => {
    return name === "jacob";
})
)

//.some & .every : return true or not//
