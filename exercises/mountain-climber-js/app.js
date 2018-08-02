var mountainClimber = {
    name: 'Nate',
    age: 42,
    friends: ["Michael", "Susan", "Oscar", "Annie"],
    favoriteClimibingGear: {
        brand: "Patagonia",
        color: "purple",
        size: "XS",
        helmet: "Petzl Vertex",
    },
    favoriteClimbs: [
        {
            name: "Mt Timpanogas",
            location: "Utah",
        },
    
        {
            name: "Mt Everest",
            location: "Africa",
        },
        {
            name: "Mt Kilamonjaro",
            location: "Africa",
        },
        {
            name: "Mt Kenya",
            loation: "Africa",
        }
    ],

    //adding a method to the above`
    speak: function(){
        console.log(mountainClimber.favoriteClimibingGear.brand)
    },
    print: function(){
        console.log("Nate's friend " + this.friends[1] + "'s favorite climb is " + this.favoriteClimbs[0].name + "!")
    }
}

mountainClimber.speak()
mountainClimber.print()



