//set up the app
//THIS IS THE MAIN TREE 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'))
ReactDOM.render(<App/>, document.getElementById('root'))
// in React, you use a closing tag <App/)


// what to render // where to render// These ar the 2 arg's
//Where to render:  document.getElementById('root')
//What to render:  <h1>Hello World</h1>,
