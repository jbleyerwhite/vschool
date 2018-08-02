// The first function will take this array, and print it to the console. 
//Make sure to add spaces in-between each word so it looks nice on the console

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

    function lyricsFunc() {
        console.log(lyrics.join(", "))
    }

    lyricsFunc()

// The second function will do the same thing, 
//but print the song backwards (starting with the word 
//"pretty": "pretty so I'm myself kiss Gotta", etc.).
function goBackwards(){

}




// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
function withSpaces({
    for (var i = 0; i = lyrics.length; i+=2){
        console.log(lyrics[i])
    }
}
)


//CORRECT CODE:
// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
// Optional Challenge:

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...

function printEveryWord(arr){
  var newArr = []
  // iterate with a for loop
  for(var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i + 1])
    newArr.push(arr[i])
  }
  return newArr.join(" ")

console.log(printEveryWord(arr))