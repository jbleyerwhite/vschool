
//return sum of nums
//throw error if not a num
function sum(x, y){
  try {
      if(typeof x !== 'number' && typeof y !== 'number'){
        throw "You must provide two numbers"
      } else {
        return x + y
      }
    }
    catch(error) {
    console.log(error)
    }
}

//call sum function inside try w 1 & 2 as arguments
//console.log w/in catch - confirm error
var user = {
    username: "Sam",
    password: "123abc"
};
function login(username, password){
        try {
            if(user.username !==  user.password){
                throw "Your user name and password do not match"
            } else {
                cosole.log("login successful!")
            } 
        }

}