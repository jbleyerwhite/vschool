var dictionary = {}

function addEntry(word, definition){
  if(!dictionary.hasOwnProperty(word)){
    dictionary[word] = definition;
  }
}

function lookItUp(key){
  // code to retrieve word: defintion from dictionary
  return (key + ": " + dictionary[key])
}

console.log(dictionary) // {}

addEntry('hello', 'A greeting')
addEntry('hello', 'a farwell')
addEntry('pig', "a cute farm animal")
console.log(dictionary) // { hello: 'A greeting' }
addEntry('goodbye', 'A farewell')
console.log(lookItUp('hello')) // hello: A greeting