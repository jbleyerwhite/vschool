import React from 'react'

const Toggle = (props) => {
    const text = props.status ? "thumbs Up" : "thumbs Down"
    return (
        <button onClick={props.handleClick}>
        {}
        </button>

    )
}

export default Toggle
