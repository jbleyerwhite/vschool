import { createStore } from 'redux'
import uuidv4 from 'uuid/v4'

// Init state
const initState = {
    newData: []
    //contacts: the array from app under this sate (create an open array in app)
}


// Action

export const addItem = newThing => {
    return {
        type: "ADD_ITEM",
        newThing: newThing
    }
}

// export const editItem = => {
//     return {
//         type: "EDIT_ITEM",
//         newData: editItem
//     }
// }

export const deleteItem = itemID=> {
    return {
        type: "DELETE_ITEM",
        itemID
    }
}


const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            action.newThing.id = uuidv4()
             return {
                newData: [...prevState.newData, action.newThing]
            }
        case "DELETE_ITEM":
            return {
                newData: prevState.newData.filter(item => item.id !== action.itemID)
            }
        // case "EDIT_ITEM":
        //     return {
        //         items: [...prevState.items, action.newData]
        //     }
        default:
            return prevState
    }

}

// Reducer:  switch/case


export default createStore (reducer)



