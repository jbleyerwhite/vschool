import React, { Component } from 'react'
import axios from 'axios'
import Hitlist from './Hitlist'
import Navbar from './Navbar'
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
      console.log(response)
      this.setState({
        data: response.data
      })
    }).catch(err => {
      console.log(err)
    })
  }


  render() {
    const mappedMafiaPeople = this.state.data.map(person => {
      return (
        <Hitlist 
          name={person.name}
          image={person.image}
        />
      )
    })

    return (
      <div>
        <Navbar/>
       <div>{mappedMafiaPeople}</div>
      </div>
    )
  }
}

export default App
