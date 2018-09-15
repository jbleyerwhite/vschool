import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Film from './component/Film'
import Production from './component/Production'
import Awards from './component/Awards'
import Navbar from './component/Navbar'
import { Switch, Route } from 'react-router-dom'
//do I need to add withRouter above?


const App  = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component= { Home } />
                <Route path="/about" component= { About } />
                <Route path="/film" component= { Film } />
                <Route path="/production" component= { Production } />
                <Route path="/awards" component= { Awards } />
            </Switch>
        </div>
    )
}

export default (App)
//withRouter before (App)?


