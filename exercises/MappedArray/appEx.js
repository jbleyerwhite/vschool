//#1:  
function doubleNumbers(arr){
//now, set the var to = the arr w method wrapped in functon
var dubNum = arr.map(function(num){
    return num * 2;
    })
    return dubNum
}
console.log(doubleNumbers([2, 5, 100]))


//#2:  Turn an array of #'s into strings:
function stringItUp(arr){
    return arr.map(function(num){
        return num.toString();
    }
)}
console.log(stringItUp([2, 5, 100]))



//#3:  CAP each of an array name:
function capitalizeNames(arr){
    return arr.map(function(str){
        return str.charAt(0).toUpperCase().replace(/ -/, ':');
    }
)}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))


//#4:  Make an array of strings in names

