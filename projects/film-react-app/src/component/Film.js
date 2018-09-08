import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFilms } from '../redux'
import FilmList from './FilmList'
// import Navbar from './Navbar'

class Film extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
            // infoToggle: false,
            // currentFilm: {}
        }
    }

    handleFilmSelect = (e) => {
        e.preventDefault()
        this.props.getFilms(this.state.userInput)

    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    //search bar below?
    // in return of render or in the 
    render() {
        console.log(this.props.films)
        return (
            <section>
                <div className='film'>
                {/* <Navbar /> */}
            
                    <h1>TAKE A SEAT!</h1>
                    <h3>( and grab some popcorn! )</h3>
                    <h2>Welcome to the Film Gallery.  Enjoy your journey searching for your favorite Film, Movie, Producer, Actor, Actress or film 'person'.</h2>

                    <form onSubmit={this.handleFilmSelect}  >
            
                        <input
                            name="userInput"
                            value={this.state.userInput}
                            onChange={this.handleChange}
                            placeholder="Search for a film, movie, person..." />
                    </form>
                    <div className='filmData'>
                        { this.props.films.map(film => <FilmList { ...film } />) }
                        
                        {/* {this.props.films.map(film => <h1>{film.title}</h1>)}
                     */}


                    </div>
                </div>

               
            </section>
        )
    }
}

export default connect(state => state, { getFilms })(Film)

