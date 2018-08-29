import React from 'react'
import './Hitlist.css'



const Hitlist = props => {
    return (
        
        <div className="hitlist">
            <h3>{ props.name }</h3>
            <img src={ props.image }/>
        </div>
    )
}

export default Hitlist