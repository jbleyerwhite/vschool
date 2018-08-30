var redux = require ('redux')

// initial state
var state = {
    people: []
}

function addPerson(person){
    return {
        type: "ADD_PERSON",
        person: person
    }
}


function removePerson(person){
    return {
        type: "REMOVE_PERSON",
        person: person
    }
}


function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_PERSON":
            return {
                people: [...prevState.people, action.person]
            }

        case "REMOVE_PERSON":
            return {
                people: prevState.people.slice(1, prevState.people.length)

            }    
    }
}



var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log("================")
    console.log(store.getState())
})

store.dispatch(addPerson({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
}
))

store.dispatch(addPerson({
    name:  "Rhea Felts",
    phone: "719-314-8485",
    email: "r.e.felts@gmail.com"
}
))

store.dispatch(addPerson({
    name: "Julee Bleyer-White",
    phone: "513-225-4425",
    email: "jbleyerwhite@gmail.com"
}
))

store.dispatch(removePerson())