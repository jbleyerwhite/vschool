//  two sum([1,2,3], 4);
//  given an array of integers & a target integer, return the indices of the FIRST two nums which add up to the target

function twoSums(arr, target) {
    let ans = [];
    for(let i = 0; i < arr.length -1 && arr[ans[0]] + arr[ans[1]] !== target; i++)
      for(let j = i + 1; j < arr.length && arr[j] + arr[i] !== target; j++, ans = [i, j]);
    return ans;
  }
  
  function twoSums(arr, target){
    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] + arr[j] === target){
          return [i, j]
        }
      }
    }
  }
  
  console.log(twoSums([2,6,1,7,8,3], 4)) // returns [0, 2]