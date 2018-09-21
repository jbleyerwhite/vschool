import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
       <div className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/climb">FIND A CLIMB</Link>
            <Link to="/tours">TOURS</Link>
       </div> 
    )
}

export default Navbar

