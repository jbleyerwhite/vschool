import React from 'react'
import { connect } from 'react-redux'
import { tick, reset } from '../redux'

// import { startTime } from '../redux'
// import { stopTime } from '../redux'
// import { restTime} from '../redux'

const Controls = props => {
    let intervalId

    const handleClick = () => {
        intervalId = setInterval(props.tick, 1000)
    }

    const handleStop = () => {
        clearInterval(intervalId)
    }

    const handleReset = () => {
        props.reset()
    }

    return (
        <div className="box"> 
            <button onClick={ handleClick }>Start</button>
            <button onClick={ handleStop }>Stop</button>
            <button onClick={ handleReset }>Reset</button>
        </div>
    )
}

export default connect(null, { tick, reset })
(Controls)

