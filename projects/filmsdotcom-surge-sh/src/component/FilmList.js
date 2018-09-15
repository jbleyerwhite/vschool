import React, { Component } from 'react' 
import { connect } from 'react-redux'



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

        const styles = {
            backgroundImage: `url(https://image.tmdb.org/t/p/w154${this.props.poster_path})`
        }
        
        return (
            <div className='toggle'>
                <div 
                className='filmImage' 
                onClick={ this.toggleInfo } 
                style= {styles}  > 
                    
                </div>

            {this.state.toggle &&
                <div className='view'>
                    <p>Rating: {this.props.popularity}</p>
                    <p>Release Date: {this.props.release_date}</p>
                </div>
            }

        </div>
        
    )}
}

// 1.  What do we want from redux state  2.  Which methods (action creators) do we need from Redux?
export default connect(state=>state, {})(FilmList)

// componentDidMount() - this.props.getFilms()
// anythng you see / display, button calls a method in redux



