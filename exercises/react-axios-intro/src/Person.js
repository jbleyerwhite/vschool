import React from 'react'

const Person = props  => {
    console.log(props)
    return (
        <div>
         <h1>{ props.name }</h1>
         <p>{ props.height }</p>
         <p>{ props.eyeColor }</p>
        </div>
    )
}

export default Person