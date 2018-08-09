var chai = require('chai')
var myFunctions = require('./app.js')
var addS = myFunctions.addS
var assert = chai.assert	
    
///describe, it 
// assert.equal (actual, expected)
describe("Create a function that adds an 's' to the end of every word in the array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['dog', 'cat', 'aligator']), ['dogs', 'cats', 'aligators'])
            //actual, expected // And, can use deepEqual because it is a string
    })
    it("should not allow numbers into the array", function(){
          //now run your test
        assert.equal(addS(['dogs', 0, 3]), 'no numbers')
    })
    it("should not add an 's' if the word ends with an 's'", function(){
        assert.deepEqual(addS(['dogs', 'cats', 'wolves']), ['dogs', 'cats', 'wolves'])
    })
        
})


//it (should not add an 's' if the word ends with an 's' already)
//write the it test:
//run the text (mocha) - to prove that it should fail
//go re-factor the function
//run test again

