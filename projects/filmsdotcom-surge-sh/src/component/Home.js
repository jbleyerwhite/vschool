import React from 'react'
// import { Link } from 'react-router-dom'

// WEBSITE:  filmsdotcom.surge.sh

const Home = props => {
    console.log(props)
    return (
        <div className='home'>
           <br></br>
            <h1>A <span>VIEW </span>THRU<br></br>THE LENS OF<span> FILM </span></h1>
           <br></br>
           <br></br>
           <br></br>
         
    
            <button onClick={ () => props.history.push('/about') }><h4>STEP INSIDE</h4></button>
        })

        </div>
    )}


export default Home

