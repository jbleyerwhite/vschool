//#1 Turn an Array of nums into a Total of ALL nums//
var numbers = [1,2,3]
    
var totalNums = numbers.reduce(function(a, b){
        return (a + b)
})
console.log(totalNums)


//#2 Turn an Array of Nums into a Long String//
function stringConcat(arr) {
    var numToStr = arr.reduce(function(a, b){
        return a + b.toString()
    }, "")
    return numToStr
}
console.log(stringConcat([1, 2, 3]))


//#3 Turn an Array of Voter Objects//
var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr){
   var numOfVoters = arr.reduce(function(total, next){
        if (next.voted === true) {
            total += 1;
        }
        return total;
   }, 0);
   return numOfVoters
}
console.log(totalVotes(voters))

//#4 ttotal cost of all PRICE//
var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {

}
console.log(shoppingSpree(wishlist))

//#5

//#6 Array of potential Voters Object//
var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function(total, next){
        if(next.age >= 18 && next.age <= 25){
            total.youth += 1;
            total.youngVotes += next.voted;
        } else if(next.age >= 26 && next.age <= 35){
            total.mids += 1;
            total.midVotes += next.voted;
        } else if(next.age >= 36 && next.age <= 55){
            total.olds += 1;
            total.oldVotes += next.voted;
        }
        return total;
    },{
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0 
    });
}
console.log(voterResults(voters))