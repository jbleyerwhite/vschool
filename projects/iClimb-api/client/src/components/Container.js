import React, { Component } from 'react'
import axios from 'axios'
import Climb from './Climb'
import '../styles/climbs.css'


export default class Container extends Component {
    constructor () {
        super()
        this.state = {
            climbData: []
        }
    }
    
    componentDidMount(){
        this.getClimbData()
    }

    getClimbData = () => {
        axios.get('/climb').then(response => {
            console.log(response)
            this.setState({
                climbData: response.data
        })
    })
        .catch(err => { console.log(err) })
    }

   


     render (){
        console.log(this.state)
        return (
            <div>
                    <h1 className="h1Climb">Salt Lake City is home to some of the top canyon rides in the world.  Explore iClimb to learn about some of the top climbing rides in the Salt Lake Valley.  Read iClimb reviews from passionate cylists that climb these epic rides.  If you feel inspired, go ahead and post a review!
                    </h1>
                { this.state.climbData.map(climb => <Climb {...climb } getClimbData={ this.getClimbData }/>)}
        
            </div>
        )
       
    }
}

