import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    return (
        <div className="nums"> 
            <h1>{ props.hours } {props.minutes } { props.seconds }</h1>
        </div>
    )
}

export default connect (state=>state, {})
(Display)