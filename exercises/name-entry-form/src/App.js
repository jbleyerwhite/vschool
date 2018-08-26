import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()


    this.state = {
      fullName: '',
      names: []

  }
}

handleChange = e => {
  this.setState({ [event.target.name]: event.target.value})
}

handleSubmit = e => {
  event.preventDefault()
  // this.state.names.push(this.state.yourName)
  this.setState(prevState => {
    return {
      names: [...prevSate.names, prevState.fullName]
    }
})
  console.log(this.state)


  render() {

    //map a new array
const namesList = this.state.names.map(name => <li>{name}</li>)

    return (
      
      <div onSubmit={this.handleSubmit} >
        <input type='text' name='fullName' placeholder='Full Name' value={this.state.fullName} onChange={this.handleChange} />
        <button>Submit</button>
        <h1>NAME: {this.state.fullName}</h1>
        <ul>{namesList}</ul>
    
      </div>
    );
  }

export default App;
