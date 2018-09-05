import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../redux'
// import { editItem } from '../redux'

// This is a Component:  Where we want to DISPATCH & ACTION

const Display = props => {
    console.log(props)

    return (
        <div>
            { props.newData.map( newData => {
                return (
            <div>
                <h3> { newData.title } </h3>
                <img src={newData.image } />
                <h2>{newData.description }</h2>

                <button onClick={() => props.deleteItem(newData.id)}>Delete</button>
                <button onClick={() => props.editItem(newData.id) }>Edit</button>
            </div>
                )
            })}
        </div>
    )
}
    

export default connect (state=>state, { deleteItem })(Display)

// state=>state :  maps global state to local state
//in {} place ADD_ITEM, EDIT_ITEM, DELEtE_ITEM
// connect is the METHOD
