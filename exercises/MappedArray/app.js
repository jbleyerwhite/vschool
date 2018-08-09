var dogs = [
    { name:  'Fluffy', isFluffy: true },
    { name:  'Fido', isFluffy: true },
    { name:  'Scooby', isFluffy: true },
    { name:  'Ralph', isFluffy: false },
]
// Use filter  to return an array of all fluffy dogs
var fluffed = dogs.filter(function(derg){
    if(derg.isFluffy){
        return derg
    }
})
// console lof (mappedArray)
console.log(fluffed)

//THEN:  return dog names

var dogNames = dogs.map(function(dog){
    return dog.name
})
console.log(dogNames)