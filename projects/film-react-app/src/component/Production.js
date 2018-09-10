import React from 'react'



const Production = () => {
    return (
        <div className='production'> 
            <div className='intro'>
                <h1>Explore the Film Festivals Around the Globe That Support The Talent Behind Bringing Storytelling to Life!</h1>
            </div>

            <div className='festival'>

             <div className='venice'>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOo6b9J5pqh3dW0d9yzUi_r-AZaVMMzic7-hupnvU5owQWJ4y" /> */}
                <a href="http://www.labiennale.org/en/cinema/2018"><span>Venice Film Festival</span></a>
            </div>
            
            <div className="sundance">
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOo6b9J5pqh3dW0d9yzUi_r-AZaVMMzic7-hupnvU5owQWJ4y" /> */}
                    <a href="https://www.sundance.org/festival/"><span>Sundance Film Festival</span></a>
                </div>

                <div className='cannes'>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOo6b9J5pqh3dW0d9yzUi_r-AZaVMMzic7-hupnvU5owQWJ4y"/> */}
                <a href="https://www.festival-cannes.com/en/"><span>Cannes Film Festival</span></a>
                </div>

                <div className='toronto'>
                     <a href="https://www.tiff.net/"><span>Toronto Film Festival</span></a>
                </div>
               
            </div>
        </div>
    )
}


export default Production

