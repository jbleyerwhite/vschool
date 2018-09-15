const express = require('express')
const veggieRouter = express.Router()


const veggies = [
    {
        type: 'spinach',
        id: 1
    },{
        type: 'artichoke',
        id: 2
    },{
        type: 'asparagus',
        id: 3
    }
]

veggieRouter.route('/') 
    .get((req, res) => {
        res.send(veggies)
    })
    .post((req, res) => {
        res.send('post request')
    })


veggieRouter.route('/:id')
    .get((req, res) => {
        res.send('get by id')
    })
    .put((req, res) => {
        res.send('put request')
    })
    .delete((req, res) => {
        res.send('delete request')
    })



module.exports = veggieRouter