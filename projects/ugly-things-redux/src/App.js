import React, { component } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import { connect } from 'react-redux'


const App  = () => {
    return (
        <div>
            <Form />
            
            <Display />
        </div>
    )
}

export default (App)






