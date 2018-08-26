import React from 'react'


const Superhero = (props) => {
    // const heroList = props.superHero.map((comics, i) => {
        return (
                <div id="display">
                    <h2>{props.names}</h2>
                    <img src={props.img} />
                    <button className="App" onClick={() => props.runThis(props.phrase)}>
                        Want to hear one of my catchphrases? Click here!
                     </button>
                </div>

        )
}
export default Superhero

