import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Climb from './components/Climb'
import Tours from './components/Tours'
import Container from './components/Container'
import { Switch, Route } from 'react-router-dom'

const App  = () => {
      
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component= { Home } />
                <Route path="/about" component= { About } />
                <Route path="/climb" component= { Container }/>
                <Route path="/tours" component= { Tours} />
            </Switch>
        </div>
    )
}

export default (App)