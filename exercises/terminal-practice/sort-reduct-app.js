//array of words & letters

animals = ['penquins', 'giraffe', 'platypus', 'rat', 'mouse']

animals.sort();
console.log(animals);

//if you want it backwards
//animals.reduce();

//sorting through an object 

var people = [
    {
        name: "Joe",
        age: 39
    },
    {
        name: 'Terry',
        age:  27
    }
]

people.sort(function(a, b){
    return a.age - b.age;
// return b.age-a.age;   returns reverse order
//  return a.name < b.name;
//  return a.name > b.name;
})
people.forEach(function(person){
    console.log(people)
});