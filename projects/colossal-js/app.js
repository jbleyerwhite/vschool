// Greet player-ask.question //
// Store playerName as var //
var ask = require('readline-sync')
var playerName = ask.question('Welcome. What is your name?');

console.log(`You are in Ancient Greece, surrounded by Olympian Gods who have warned you of the most badass & dangerous Creatures & Monsters in Greek Mythology.  It is year 2000 BC and you must defeat any Creature or Monster you encounter to become a hero.  Proceed with caution, and beware of being murdered or cursed.  Stay clear of Zeus.  He'll just have you raise one of his kids & forget about you instantly.  Are you ready for the adventure, ${playerName}?  TO begin choose an option to enter the Greek Kingdom`)

// Set player var keys: 1)name 2) healthpoints 3) isAlive 4) attack 5) inventory //
var player1 = {
    name: playerName,
    level: 1,
    healthPoints: 100,
    isAlive: true,
// Turn key 'attack' into a Method w a Function-retrun here a random number //
    attack:  function (){
        return Math.floor(Math.random() * 20) + 1;
    },
    loot:  []
}

var inventoryItems = []

//Enemy names & Info o: 3 objects inside array//
var enemies = [
{
    name: "Typhon",
    healthPoints: 10,
    isAlive: true,
    attack: 15
},
{
    name: "Cyclops",
    healthPoints: 10,
    isAlive: true,
    attack: 15
},
{
    name: "Cerberus",
    healthPoints: 10,
    isAlive: true,
    attack: 15
}
]

/////FUNCTIONS//////
// Function() Walk, Run, Fight //
// Function to Attack or Run //
// Set Walk function w 1 in 4 chance of being attacked(put outside while loop) //
function enemy(){
    return Math.floor(Math.random() * enemies.length)
}

// WALK FUNCTION-set 1/3-1/4 chance being attacked & use math.random & set chance <=0.25 enemy will appear//
function walk(){
    console.log("You are in the Greek Kingdom");
    var chance = Math.random();
    if (chance <= 0.33) {
        battle()
        if(player1.healthPoints >0){  
            player1.loot.push("Skull Crusher");
            player1.level += .25;
            // console.log("You can do it!  Continue to fight this battle!")
        } else if(player1.healthPoints < 1) {
            player1.isAlive = false
            console.log("You have died. \nGame Over")
        }
    } else if (player1.level === 2) {
        console.log("You have defeated all the monsters, and you win! \nYou're now a hero!")
        player1.isAlive = false
    } else {
        console.log("No Greek Monsters, yet!")
    }
}
// FUNCTION-battle, run/attack options w keyInSelect//
// While loop w if/else // math rand w ,5 options to run/attack
// Chcek player health-player points to enemy health//
// Set isAlive to dead//what enemy you fight, enemy health poits, not fled being true, stting run/or attack, the while is checking-hp's
function battle(){
    var currentEnemy = enemies[enemy()]
    var ckEnemyHealth = currentEnemy.healthPoints
    var notFled = true
    var battleOptions = ["Run from the Monster!", "Attack!"]
    console.log(`Oh no,  ${currentEnemy.name} has appeared!!!  What do you want to do now?`)
    while (player1.healthPoints > 0 && ckEnemyHealth > 0 && notFled) {
        //console.log(`You have ${player1.healthPoints} health points.`)
        //console.log(`The Greek Monster has ${ckEnemyHealth} health points.`)
        var indexChoice = ask.keyInSelect(battleOptions, "What would you like to do?")
        if (battleOptions[indexChoice] === "Run from the Monster!"){
            var fled = Math.random()
            if (fled > .5){
                console.log("You fled from the Greek Monster!")
                notFled = false;
            } else if (fled < .5) { 
                console.log("Oh no, the Greek Monster got me!")
                //console.log("The Greek Monster cursed you!  You are a not a hero.  GAME OVER!")
                player1.isAlive = false
            }
        } else if (battleOptions[indexChoice] === "Attack!"){
            //notFled = true
            player1.healthPoints -= Math.floor(Math.random() * currentEnemy.attack) +1
//Add random number * modifier//
            ckEnemyHealth -= player1.attack();
        }
        if (ckEnemyHealth < 1) {
            console.log("Awesome, you murdered the Monster!")
//checks if the monster died-extra check w/in the while loop
//Push an item to an array...// from InventoryItems array at top*****//
        } 

    }  
}
       
////////GAME LOOP//////////
//While Loop - running isAlive//
//Options- walk & print inventory (player stats)//
//if statement -options[indexChoice] //
while(player1.isAlive){
    var options = [`walk`, `view inventory`]
    var indexChoice = ask.keyInSelect(options, "What would you like to do?")
    if (options[indexChoice] === "walk") {
        walk()
    } else if (options[indexChoice] === "view inventory"){ 
        console.log(player1) // then...console log inventory items array//
    }else {
        console.log(`${playerName}, make another decision now!`)
    }
}
