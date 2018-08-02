
var letters = []

function solutions(str){
    var obj = {}
    for (let i = 0; i < str.length; i++){
    var transfer = str[i]
    if(ojb[transfer]) {
        ojb[transfer]++
    } else {
        obj[transfer] = 1
    }
}
    return ojb
}


//loop through a string
//create an object