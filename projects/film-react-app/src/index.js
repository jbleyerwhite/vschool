import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux'
import './styles/navbar.css'
import './styles/home.css'
import './styles/about.css'
import './styles/film.css'
import './styles/filmList.css'
import './styles/production.css'
import './styles/awards.css'



// import { createStore } from 'redux'



// store.subscribe (() => {
//     console.log(store.getState())
// })


ReactDOM.render(
    <Provider store={ store }>
         <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))

