import React from 'react'
// import { Link } from 'react-router-dom'


const Home = props => {
    console.log(props)
    return (
        <div className='home'>
            <h1><span>VIEWING </span>THRU THE LENS OF<span> FILM </span></h1>
           
            <button onClick={ () => props.history.push('/about') }><h4>STEP INSIDE</h4></button>
        })

        </div>
    )}


export default Home

