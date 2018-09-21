import React, { Component } from 'react'
import axios from 'axios'
import '../styles/climbs.css'

class Climb extends Component {
    constructor () {
        super()
        this.state = {
            reviewsToggle: false,
            inputToggle:  false,
            comment: ""
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
            comments: this.state.comment
        }

        axios.put(`/climb/comments/${ this.props._id }`, newClimb).then(response => {
            this.setState(prevState => ({
                comment: ""
            }))
        })

        this.props.getClimbData()
    }


//post reviews

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
                <div className="climbsDisplay">
                    <h3 className="climbT">{ this.props.title }</h3>
                    <img src={ this.props.img } alt="" />
                    <div className="climbData">
                        <p>Distance: { this.props.distance }</p>
                        <p>Elevation Gain:{ this.props.elevationGain }</p>
                        <p>Grade:{ this.props.percentGrade }</p>
                    </div>
                    <button onClick={ this.handleReviewToggle }><span>ride reviews</span></button> 
                    <button onClick={ this.handleInputToggle }><span>write a review</span></button>
                    {/* want to scroll when clicked to view the reviews */}
                    {/* <button>like me</button> */}
                </div>

                { this.state.inputToggle && 
                    <form onSubmit={ this.handleSubmit }>
                        <input 
                            type="text" 
                            onChange={ this.handleChange } 
                            value={ this.state.comment } 
                            name="comment" />
                        <button>submit</button>
                    </form>
                }
   {/* set up review toggle & map out this.props.comments */}

                { this.state.reviewsToggle && this.props.comments.map(comment => <p>{ comment }</p>) }
                
             </div>
        )
    }
}




export default Climb