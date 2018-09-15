import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
       <div className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/film">FILM GALLERY</Link>
            <Link to="/production">FILM FESTIVALS</Link>
            <Link to="/awards">AWARDS + COMPETITION</Link>
       </div> 
    )
}

export default Navbar

