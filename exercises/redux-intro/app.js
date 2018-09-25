var redux = require('redux')

// REDUX

// Initial State
// alternate:  const initSate = {
                // contacts: [] }

var state = {
    count: 0
}

// ACTIONS - Action Creators // - Must have a Type in "SCREAMING_SNAKE_CASE"
    // Actions return action objects when dispatch is used
        // The action object is sent to the reducer to update state appropriately

// Alternate way to right a function:  
//  const addOne = () => { } 
function addOne(){
    return {
        type: "ADD_ONE"
    }
}

function subtractOne(){
    return {
        type: "SUBTRACT_ONE"
    }
}

function setCount(newCount){
    return {
        type: "SET_COUNT",
        newCount: newCount
    }
}


// REDUCER - Function that takes action objects and updates the store (state) appropriately
        // Job is to update our global state depending on the action received
        //Check the type of the action to kow which part of state to update
// const reducer = (prevState = initState, action) => { }
function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUBTRACT_ONE":
            return {
                count: prevState.count - 1
            }
        case "SET_COUNT":
            return {
                count: action.newCount
            }
        // default used to ensure that it returns something 
        default:
            return prevState
    }
}

var store = redux.createStore(reducer)

// Logging to the console the condition of your current store (state)
store.subscribe(function(){
    console.log(store.getState())
})

//Create our Store and Export it
        //store is created from the reducter
        //create store 
            //INSTALL:   npm i react-redux redux
            //Import Provider:  import { Provier } from reat-redux (in Index.js)
// this.setState({ count: prevState.count + 1 })
//store.dispatch ( the function or the case)
store.dispatch(setCount(589459817349857))
store.dispatch(addOne())
store.dispatch(addOne())
