import React, { Component } from 'react'

// This is a Component:  Where we want to DISPATCH & ACTION

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            image: '',
            description: ''
        }
    }



    handleSubmit = e => {
        e.preventDefault()
        // ??? do you need to use the \n ????
        alert(`Title: ${this.state.title},
                Image: ${this.state.image},
                Description: ${this.state.description}`)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input 
                onChange={this.handleChange}
                name="title"
                placeholder="Title"
                value={this.state.title}/>
            <input 
                onChange={this.handleChange}
                name="image" 
                value={this.state.image}
                placeholder="Image URL"/>
            <input
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
                placeholder="Description"/>

            <button>Submit</button>
            </form>
        )
    }    
}

export default Form;