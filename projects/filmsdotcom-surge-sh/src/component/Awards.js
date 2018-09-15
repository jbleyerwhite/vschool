import React from 'react'


const Awards = props => {
    return (

        <div className='awards'>
           <div className='intro'>
                <h1>Tap into the top awards behind the extraordinary talent with bringing storytelling to life in Film!</h1>
            </div>

             <div className='oscars'>
                    <a href="https://www.oscars.org"><span>Academy Awards</span></a>
                </div>

                 <div className='short'>
                    <a href="https://filmpipeline.com/"><span>Short Film</span></a>
                </div>

                 <div className='global'>
                    <a href="http://www.showmeshorts.co.nz/for-filmmakers/resources/list-of-international-short-film-festivals/"><span>Global Short Film</span></a>
                </div>
        
                <div className='creative'>
                    <a href="https://filmfreeway.com/festivals"><span>Festival + Creative Comp</span></a>
                </div>

                

                

                <p>Interested in entering film festivals and creative contests?  Click here to explore.....</p>


        
        </div>
    )
}


export default Awards