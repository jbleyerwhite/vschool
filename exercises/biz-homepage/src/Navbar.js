import React from 'react';
import './Navbar.css';

const Navbar = () => {


    return (
        <div className="navbar">
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="story">Our Story</a></li>
            <li><a href="photo">Enter Our Photo Contest</a></li>
        
        </ul>
        </div>

    )
}
export default Navbar;