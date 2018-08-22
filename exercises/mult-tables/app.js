function multTable(n){
    const table = []
    for(let i = 1; i < n + 1; i++){
        const tempArray = []
        for(let j = 1; j < n; j++){
            tempArray.push(i * j)
        }
        table.push(tempArray)
    }
   return table
}
console.log(multTable())

