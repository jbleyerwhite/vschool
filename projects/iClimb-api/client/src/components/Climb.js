import React, { Component } from 'react'
import axios from 'axios'
import '../styles/climbs.css'

class Climb extends Component {
    constructor () {
        super()
        this.state = {
            reviewsToggle: false,
            inputToggle:  false,
            comment: "",
            divClass1: 'climbsDisplay',
            divClass2: 'displayInfo'
        }
    }

// set state for toggles - above  
///// BELOW ARE METHODS:  all the handle change/submits////
///////////////////////////////////////////////////////////
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

//post reviews//
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

      handleClass = () => {
          if(this.state.divClass1 === 'climbsDisplay'){
            this.setState({divClass1: 'climbsDisplay1', divClass2: 'displayInfo1'})
          }else {
              this.setState({divClass1: 'climbsDisplay', divClass2: 'displayInfo'})
          }

      }


    render(){
        return (

            <div>
                <div style={ {backgroundImage: `url(${ this.props.img })`} } className={ this.state.divClass1} >
                    <h3 className="climbT" onClick={this.handleClass}>{ this.props.title }</h3>
                    {/* <img src={ this.props.img } alt="" /> */}
                <div>
                <div className={this.state.divClass2}>
                    <p>Distance: { this.props.distance }</p>
                    <p>Elevation Gain:{ this.props.elevationGain }</p>
                    <p>Grade:{ this.props.percentGrade }</p>
                    <button onClick={ this.handleReviewToggle }><span>climb ride reviews</span></button> 
                    <button onClick={ this.handleInputToggle }><span>post a review</span></button>
                </div>
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
                { this.state.reviewsToggle && this.props.comments.map(comment => <p>{ comment }</p>) }
                </div>
            </div>
        )
    }
}  
export default Climb

                   
{/* want to scroll when clicked to view the reviews */}
{/* <button>like me</button> */}                       
{/* set up review toggle & map out this.props.comments */}
                   
  



