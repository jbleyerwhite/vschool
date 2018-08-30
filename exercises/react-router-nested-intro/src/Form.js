import React, { Component } from 'react'
import './styles.css'
import './Form.css'
import Display from './Display'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            aboutYourself: '',
            array: []
        }
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
       


    handleSubmit = e => {
        e.preventDefault()
       const newForm = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                favoriteFood: this.state.favoriteFood,
                aboutYourself: this.state.aboutYourself}
        
        this.setState(prevState => {
            return {
                array: [...prevState.array, newForm]
            }
        })
    }


  render() {
    // console.log(this.state.array)
//console.logged to see in the dev tools that it worked!

    const badgeInfo = this.state.array.map((name, i) => <Display key={ name.firstName + i }{...name}/>)

    return (
    <div>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='input'>
                <input
                        type="text"
                        onChange={this.handleChange}
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}/>
                <input 
                        type="text"
                        onChange={this.handleChange}
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}/>

                <input 
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        placeholder="Email"
                        value={this.state.email}/>    

                <input 
                        type="text"
                        onChange={this.handleChange}
                        name="birthPlace"
                        placeholder="Place of Birth"
                        value={this.state.birthPlace}/>

                <input 
                        type="tel"
                        onChange={this.handleChange}
                        name="phone"
                        placeholder="Phone"
                        value={this.state.phone}/>

                <input 
                        type="text"
                        onChange={this.handleChange}
                        name="favoriteFood"
                        placeholder="Favorite Food"
                        value={this.state.favoriteFood}/>

                <input 
                        type="text"
                        onChange={this.handleChange}
                        name="aboutYourself"
                        placeholder="Tell us about yourself"
                        value={this.state.aboutYourself}/>

                <button>Submit</button>  
            </div> 
         
        </form>

        <div>{ badgeInfo }</div>

    </div>
    )
  }
}

export default Form
