import React, { Component } from 'react'
import {addItem} from '../redux'
import { connect } from 'react-redux'
import './Form.css'

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

        const newData = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description
        }

        this.props.addItem(newData)

        this.setState(prevState => ({
            title: '',
            image: '',
            description: ''
        }
        ))
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

export default connect(null, { addItem }) (Form)


