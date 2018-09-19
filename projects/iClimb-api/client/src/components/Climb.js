import React, { Component } from 'react'
import axios from 'axios'

class Climb extends Component {
    constructor () {
        super()
        this.state = {
            reviewsToggle: false,
            inputToggle:  false,
            comments: ""
        }
    }
// set state for toggles - above
// methods for toggle - below

    handleChange = e => {
        // const value = e.target.type === 'submit' ? e.target.submitted : e.target.value
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newClimb = {
            comments: this.state.comments
        }

        axios.post('/climb', newClimb).then(response => {
            this.setState(prevState => ({
                comments: [...prevState.comments, response.data]
            }))
        })
    }
    //? post by comment vs cimb?


    handleReviewToggle = () => {
        this.setState(prevState => ({
          reviewsToggle: !prevState.reviewsToggle
        }))
      }


      handleInputToggle = () => {
          this.setState(prevState => ({
              inputToggle: !prevState.inputToggle
          }))
      }



    render(){
        return (

            <div>
                <div className="displayClimbs">
                    <h3>{ this.props.title }</h3>
                    <img src={ this.props.img } alt="" />
                    <p>Distance: { this.props.distance }</p>
                    <p>Elevation Gain:{ this.props.elevationGain }</p>
                    <p>Grade:{ this.props.percentGrade }</p>
                    <button onClick><span>ride reviews</span></button> 
                    <button onClick={ this.handleInputToggle }><span>write a review</span></button>
                    {/* want to scroll when clicked to view the reviews */}
                    {/* <button>like me</button> */}
                </div>

                { this.state.inputToggle && 
                    <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text" 
                        onChange={ this.handleChange } 
                        value={ this.state.comments } 
                        name="comments" />
                    <button>submit</button>
            
                    </form>
                }
                    
            </div>
        )
    }
}




export default Climb