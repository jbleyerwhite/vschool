import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            names: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}\n,
                Name: ${this.state.lastName}`)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                onChange={this.handleChange}
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}/>
            <input 
                type="text" 
                name="lastName" 
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"/>
              <button>Submit</button>
            </form>
        )
    }    
}

export default App;
