var chai = require('chai')
var myData = require('./app.js')
console.dir(myData)
var people = myData.people
var olderThan18 = myData.olderThan18
var over18 = myData.over18
var assert = chai.assert

// equal  = comapring primitice values, string, numbers
// deepEqual = comapring complex types, Objects, Arrays
describe("Create a function that returns an array of people older than 18", function(){
    it("returns an array of only people older than 18", function(){
        //assert.deepEqual(actual, expected) // (arg1, arg2) //
        assert.deepEqual(olderThan18(people), over18)
    })
})