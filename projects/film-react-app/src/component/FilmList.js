import React, { Component } from 'react' 
import { connect } from 'react-redux'
import axios from 'axios'



class FilmList extends Component {
    constructor (){
        super()
        this.state = {
            toggle: false
        }
    }

    toggleInfo = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }
    
    render(){
        console.log(this.props)
        return (
            <div className='toggle'>
                <div onClick={ this.toggleInfo } style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w154${this.props.poster_path}`})`, height: 190}} className='filmImage' > 
                    
                </div>

            {this.state.toggle &&
                <div>
                    <p><span>Rating: </span>{this.props.popularity}</p>
                    <p><span>Release Date: </span>{this.props.release_date}</p>
                </div>
            }

        </div>
        
    )}
}

// 1.  What do we want from redux state  2.  Which methods (action creators) do we need from Redux?
export default connect(state=>state, {})(FilmList)

// componentDidMount() - this.props.getFilms()
// anythng you see / display, button calls a method in redux



