import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import './styles/climbs.css'
import './styles/about.css'
// import './styles/tours.css'
// import './styles/navbar.css'
import './styles/home.css'





ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'))
