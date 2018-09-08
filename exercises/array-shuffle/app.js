function shuffle (arr) {
    const copyArr = [...arr];
    const newArr = [];
    while (copyArr.length > 0) {
        newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
    }
    return newArr;


}
shuffle([1,2,3,4,5])