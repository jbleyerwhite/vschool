import React, { Component } from 'react';
import axios from 'axios'
import Person from './Person'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        data: []
    }
  }
  //ADD: DID MOUNT  /  ADD: axios.get /  ADD:this.setSate
  // make a clase, going to give you a state, grab the data & make an array of objects
  // this happens b4 the RENDER
  componentDidMount(){
    axios.get('https://swapi.co/api/people').then(response => {
      this.setState({
        data: response.data.results
        //we use this response.data.results instead of console.log
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
  const mappedStarwarsFolk = this.state.data.map( person => {
      // return JSX for person
    return (
        <Person 
    //could us { ...person} with the key  THIS eliminates the name,height,eyeColor//
            name={ person.name } 
            key={ person.url } 
            height={ person.height } 
            eyeColor={ person.eye_color }/>
    )
  })
  return (
    <div>{ mappedStarwarsFolk }</div>
  )
}
}

export default App
