import React from 'react'
import './Hitlist.css'



const Hitlist = props => {

const styles = {backgroundImage: `url(${ props.image })`}    
    return (
        
        <div style={ styles } className="hitlist">
            <h3>{ props.name }</h3>
        </div>
    )
}

export default Hitlist