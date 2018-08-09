function sortedOfAge(arr){
    var eighteenOlderArray = arr.filter(function (num){
        if(num.age >= 18){
            return num
        } 
    // retrun num.age >= 18
})
    return eighteenOlderArray
    console.log

    //alphabetically
    var sorted = arr.sort(function(a,b){
        if(a.name < b.name){
          return -1
        } else if(a.name > b.name){
          return sorted
        }
      }


sortedOfAge([  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]);  
//older than 18, sorted alphabetically