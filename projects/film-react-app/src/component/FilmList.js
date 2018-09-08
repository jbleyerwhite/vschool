import React, { Component } from 'react' 
import { connect } from 'react-redux'
import axios from 'axios'



class FilmList extends Component {

    
    render(){
        return (
            <div style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w154${this.props.poster_path}`})`, height: 300 }} className='filmImage' > 
                
            </div>

        
    )}
}

// 1.  What do we want from redux state  2.  Which methods (action creators) do we need from Redux?
export default connect(state=>state, {})(FilmList)

// componentDidMount() - this.props.getFilms()
// anythng you see / display, button calls a method in redux



