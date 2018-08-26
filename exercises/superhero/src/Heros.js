import React from 'react'
import Superhero from './Superhero'


const comics = [
    {
      name: "Superman",
      img: "https://images7.alphacoders.com/353/thumb-1920-353899.jpg",
      phrase: "Easy miss, I've got you!",
    },
    
    {
      name: "Batman",
      img:"http://www.fillyourheartediblememories.com/images/products/7606.jpg",
      phrase: "It's Batman Time",
    },
    
    {
      name: "Wonder Woman",
      img: "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/05/joss-whedon-wonder-woman-script.jpeg?itok=P0NS9sQc",
      phrase: "Mericful Minerva!",
    },
    
    {
      name: "Robin",
      img: "https://vignette.wikia.nocookie.net/batmantheanimatedseries/images/9/9b/FoV_57_-_Robin.jpg/revision/latest?cb=20160410013437",
      phrase: "Holy Cinderella!",
    }
  ]


const Heros = (props) => {
    const heroList = comics.map((comic, i) => {
        console.log(comic.name + i)
        return <Superhero 
            key = {comic.name + i}
            names = {comic.name}
            img = {comic.img}
            phrase = {comic.phrase}
            runThis = {props.runThis} />
    })


    return (
        <div>
            {heroList}
        </div>
    )
}




export default Heros

  