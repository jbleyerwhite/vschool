import React from 'react'
// import Navbar from './Navbar


const About = props => {
    return (

        <div className='about'>
        {/* <Navbar /> */}
            <body>
                <h2>ABOUT</h2>
                <p>Viewing Thru The Lens of Film is a site built in support with The Movie Data Base and Julee Bleyer-White, a current web development student at Vschool, in Salt Lake City.  The aim is to enable anyone in the world to follow in the footsteps of film legends, and step inside to explore the creativity, talent and production behind the beauty of film.</p>
                <br></br>
                <p>From independent film to blockbuster movies, along with the film festivals and creative competitions that support film, we celebrate the actors and actresses that bring these stories to life, the production and design talent behind bringing them to life. Enjoy your journey as you explore 'Viewing The Lens of Film'!</p>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => props.history.push('/film')}>Enter the Film Gallery</button>
            </body>
        </div>
    )
}


export default About

//back arrow button?
//<a href="forwrd arrow" class="next">Next</a>

