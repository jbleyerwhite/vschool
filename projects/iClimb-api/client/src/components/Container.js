import React, { Component } from 'react'
import axios from 'axios'
import Climb from './Climb'


export default class Container extends Component {
    constructor () {
        super()
        this.state = {
            climbData: []
        }
    }
    
    componentDidMount(){
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
                { this.state.climbData.map(climb => <Climb {...climb }/>)}
        
            </div>
        )
       
    }
}

