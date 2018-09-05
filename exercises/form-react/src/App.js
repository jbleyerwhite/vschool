import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super () 

    this.state = {
        myName: '',
        age: '',
        city: '',
        state: '',
        names: []
        // this names: array - allows you to store the date.  To display it on the screen, you create <h> elements in return

    }
  }



handleChange = event => {
 this.setState({ [event.target.name]: event.target.value } )
}

handleSubmit = event => {
  event.preventDefault()
  this.state.names.push(this.state.myName)
  console.log(this.state)
  // alert(`Name: ${this.state.myName}\nAge: ${this.state.age}`) 

}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}/>
        <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
        <input type='text' name='city' placeholder='City' value={this.state.city} onChange={this.handleChange} /> 
        <input type='text' name='state' placeholder='State'value={this.state.state} onChange={this.handleChange} />
        <button>submit</button>
        <h1>Name: {this.state.myName}</h1> 
        <h2>Age: {this.state.age}</h2>
        <h2>City: {this.state.city}</h2>
        <h2>State: {this.state.state}</h2>
    
      </form>
        
  
    );
  }
}

export default App;
