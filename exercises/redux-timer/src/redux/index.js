import { createStore } from 'redux'
import './styles.css'

const initState = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

export const tick = () => {
    return {
        type: "TICK"
    }
        
}

export const reset = () => {
    return {
        type: "RESET_TIME"
    }
}



const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "TICK":
            if(prevState.minutes === 60 && prevState.seconds === 60){
                return {
                    hours: prevState.hours + 1, 
                    minutes: 0,
                    seconds: 0
                }
            }else if(prevState.seconds === 60){
                return { 
                    hours: prevState.hours,
                    minutes: prevState.minutes + 1,
                    seconds: 0
                }
            }else if(prevState.seconds <= 60){
                return {
                    hours: prevState.hours,
                    minutes: prevState.minutes,
                    seconds: prevState.seconds + 1
                }
            }

        case "RESET_TIME":
            return {
                hours: 0,
                minutes: 0,
                seconds: 0
            }

        //  case "STOP_TIME":
        //     return {
        //         hours: prevState .hours,
        //         minutes: prevState.minutes,
        //         seconds: prevState.seconds

        //     } 
            
            
        default: 
            return prevState
    }

}

export default createStore(reducer)