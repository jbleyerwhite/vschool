// COMPONENTS  are just fimctins that return som JSX (HTML/JS)

import React from 'react'
import HelloWorld from './HelloWorld'
//import Navbar from '/Navbar'
//import Sidebar from '/Sidebar

const App = () => {
    return (
        <div>
            <HelloWorld/>
            <p>LaLaLa</p>
        </div>
    )
}

export default App


// APP is the primary IMPORT 

//  OR: and us the traditional function :  function App (){}

// if you want to return 2 elements:  MUST USE A <DIV> to contain them