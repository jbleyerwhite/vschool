import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
       <div className="nav">
        <Link to="/">About</Link>
        <Link to="/">Film Gallery</Link>
        <Link to="/">Festivals + Awards</Link>
       </div> 
    )
}

export default Navbar