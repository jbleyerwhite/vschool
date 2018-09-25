import React from 'react'
import '../styles/tours.css'



const Tours = () => {
    return (
       <div classname="tourContainer">
        <div className="intro">
                <h1 className="introTours">Explore the top mutiple stage professional bicycle races around the world. From Utah to around the globe, stay in-tune with the top riders and events that inspire cycling enthusiasts locally.</h1>
        </div>

        <div className="tours">
             <div className="utah">
                {/* <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/14086463_10153838367037285_3752043987921961671_o.jpg?_nc_cat=0&oh=c77f998f79087e355a4c8b37d96aaf2a&oe=5C2287F9" /> */}
                <button1><a href="https://www.tourofutah.com/"><span>Tour of Utah</span></a></button1>
            </div>

            
            <div className="california">
                {/* <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p200x200/22789155_10155177029622428_1840194353701895905_n.jpg?_nc_cat=0&oh=a6168723c8552be2ad9ba760e65b0185&oe=5C2B29EE" /> */}
                <button1><a href="https://www.amgentourofcalifornia.com/"><span>Tour of California</span></a></button1>
            </div>


            <div className="colorado">
                {/* <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/39386984_996272827218793_6404330253094748160_o.jpg?_nc_cat=0&oh=09ec59c5ca392e60f94bb27fbd3c2ec3&oe=5C2C7EFD"/> */}
                <button1><a href="https://www.festival-cannes.com/en/"><span>Colorado Classic</span></a></button1>
            </div>

            <div className="france">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNjRrGllevRP38GSD3WKqBiLvmZuylaEa0d1LNFTbDmCC_oy3" /> */}
                <button1><a href="https://www.letour.fr/en"><span>Tour de France</span></a></button1>
            </div>

            <div className="italy">
                {/* <img src="http://3.bp.blogspot.com/-Thdq_7KtVf0/UYIiCfK6KGI/AAAAAAAABow/lzO9zlnMlO8/s1600/Giro_Logo_2013.png" /> */}
                <button1><a href="https://www.giroditalia.it/eng/"><span>Giro d'Italia</span></a></button1>
            </div>

            <div className="spain">
                {/* <img src="http://www.lavuelta.com/" /> */}
                <button1><a href="https://www.lavuelta.es/en/"><span>Vuelta a Espana</span></a></button1>
            </div>

            <div className="austria">
                
                <button1><a href="https://www.innsbruck-tirol2018.com/en/"><span>UCI Road World Champs-Austria</span></a></button1>
            </div>

            <div className="belgium">

                <button1><a href="https://www.lotto-belgiumtour.be/"><span>Lotto Belgium Tour</span></a></button1>
            </div>
               
            </div>
            </div>
    )
}


export default Tours
