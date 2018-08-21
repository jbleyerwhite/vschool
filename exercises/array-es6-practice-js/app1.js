function sortedDogOwners(arr){
  // what should I expect:  1 dog, sort by age older than 20
  //sort array-do they have a dog?  
    const peopleWithPets = peopleAndPets.filter(person => {
            const dogsOnly = person.pets.filter(pet => {
                return pet.type === "dogs"
            })

      return dogsOnly.length > 0
    })  
      

    const sorted = peopleWithDogs.sort((a, b) => {
            return a.age > b.age
        })
        // console.log(sorted)


        console.log(peopleWithDogs)


        const firstNames = peopleAndPets.reduce((agg, value) => {
            const names = value.pets.reduce((agg,value) => {
                return [...agg, value.name]
                return agg.concat(value.name)
            }, [])
                return [...agg, names]
                return agg.concat(names)
            }, [])

        console.log(firstNames)






       