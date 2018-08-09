//Given a list of people with eye color, pull all blue eyes

function clientEyeColor (arr) {
    var blueEyes = arr.filter(function(value){
        if(value.color === "blue")
        return value
    })
    return blueEyes
}

console.log(clientEyeColor([  
    { 
        name: "Rhea Felts",
        color: "blue"
    },
    {
        name: "Jameel Matin",
        color: "brown"
    },
    {
        name: "Vlad Tsoy",
        color: "blue"
    },
    {
        name: "Renate Peterson ",
        color: "green"
    },
    {
        name: "Gustavo Uribe ",
        color: "blue"
    },
    {   name: "Nate Jensen",
        color: "blue"
    }
]))