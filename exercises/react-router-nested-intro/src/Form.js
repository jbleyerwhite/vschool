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
            favoriteFood: '',
            aboutYourself: '',
            array: []
            //create an array for the info to display on badge
        }
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
       

    //handleSubmit:  buid up/create new object to connect to display on badge
    //build what will be stored to display as objects in this.state
    //MUST USE:  e.preventDefault
    handleSubmit = e => {
        e.preventDefault()
       const newForm = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                birthPlace: this.state.birthPlace,
                phone: this.state.phone,
                favoriteFood: this.state.favoriteFood,
                aboutYourself: this.state.aboutYourself}
        
                //set up .setState & use grab prevState data to return array of data on newForm (object that is new)
        this.setState(prevState => {
            return {
                array: [...prevState.array, newForm]
                //add this.state data from above - this will clear
            }
        })
    }


  render() {
// console.log(this.state.array)
//console.logged to see in the dev tools that it worked!

// below:  must MAP display/badge info and send it props.  Can use name or info:
    const badgeInfo = this.state.array.map((name, i) => <Display  key={ name.firstName + i }{...name}/>)

    return (
    <div>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='input'>

                <div className='row1'>
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
                </div>

                <div className='row2'>
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
                </div>

                <div className='row3'>
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
                </div>

                <div className='about'>
                <input 
                        type="text"
                        onChange={this.handleChange}
                        name="aboutYourself"
                        placeholder="Tell us about yourself"
                        value={this.state.aboutYourself}/>
                </div>

                <button>Submit</button>  
            </div>
      
        </form>
        
        <div>{ badgeInfo }</div>
    
    </div>
    )
  }
}

export default Form
