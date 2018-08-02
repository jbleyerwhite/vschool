
function countCode(str){
    return str.match(/co.e/gi).length
  }
  
  console.log(countCode('CosssdeCode')) // --> 1
  console.log(countCode('codexxcodex')) // --> 2
  console.log(countCode('co#exxcosexxdco*e')) // --> 3


//MATCH method &  RegExp method - returns array of that string method
//use .length at the end to return
//RegExp Match method uses the placeholder: (/co.e/gi)....
// the dot (.) is for the letter d in code that is the 'exception' of the letter we won't accept)

//EXAMPLE using a for loop:
function altCodeCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] + str[i + 1] + str[i + 3] === 'coe'){
          count++
      }
    }
    return count;
  }
  
  console.log(altCodeCount('Cosssdecode')) // --> 1
  console.log(altCodeCount('codexxcodex')) // --> 2
  console.log(altCodeCount('codexxcosexxdco*e')) // --> 3
  //this way check for the 'if' === to 'coe'