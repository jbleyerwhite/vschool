import React from 'react'
// import { Link } from 'react-router-dom'


const Home = props => {
    console.log(props)
    return (
        <div className='home'>
           <br></br>
            <h1><span>VIEWING </span>THRU<br></br>THE LENS OF<span> FILM </span></h1>
           <br></br>
           <br></br>
           <br></br>
         
    
            <button onClick={ () => props.history.push('/production') }><h4>STEP INSIDE</h4></button>
        })

        </div>
    )}


export default Home

