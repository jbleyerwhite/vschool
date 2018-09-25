import React from 'react'
import '../styles/home.css'
// import { Link } from 'react-router-dom'


const Home = props => {
    console.log(props)
    return (
       
            <div className="home">
                <h1 className="h1Home">iClimb</h1>
                <h1 className="h1Up">It's all about UP!</h1>
                <h3 className="h3Home">Discover the Top Climbing Rides + Salt Lake City</h3>
                <button onClick={ () => props.history.push('/climb') }>FindAClimb</button>
            </div>
       
    
    )
}


export default Home