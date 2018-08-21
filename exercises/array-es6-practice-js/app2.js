//Give Everyone's first pet a method that returns a <li> for each of the owner's pets.
//Give Everyone's first pet a method that calls the next person's first pet.

const peopleWithDogs = peopleAndPets.filter(person => {
    const hasDog = person.pets.some(pet => {
        return pet.type === "dog"
    })
    return hasDog  
}).sort((a, b) => {
    return a.age > b.age
})

console.log(peopleWithDogs)

const firstNames = peopleAndPets.reduce((agg, value)=>{
    const names = value.pets.reduce((agg, value) => {
        return [...agg, value.name]
        return agg.concat(value.name)
    }, [])
    return [...agg, ...names]
    return agg.concat(names)
}, [])

// ["<li>howard</li>", "<li>bear</li>", "<li>sparky</li>"]

console.log(firstNames)

const liArray = firstNames.map(name => `<li>${name}</li>`)

console.log(liArray)