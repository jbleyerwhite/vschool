import React from 'react'

const Pets = (props) => {

    return (

        <div>
            <h1>Pet Name: {props.name}</h1>
            <h3>Breed:  {props.breed}</h3>
    
        </div>
    )
}

export default Pets