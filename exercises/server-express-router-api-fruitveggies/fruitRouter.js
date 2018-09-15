const express = require('express')
const fruitRouter = express.Router()

const fruits = [
    {
        type: 'watermelon',
        id: 1
    },{
        type: 'grapes',
        id: 2
    },{
        type: 'peach',
        id: 3

    }
]


//ROUTES//
fruitRouter.route('/')
    .get((req, res) => {
        res.send(fruits)
    })
    .post((req, res) => {
        //const newFruit.id = uuid()
        //fruits.push(newFruit)
        res.send(fruits)
    })

fruitRouter.route('/:id')
    .get((req, res) => {
        res.send('request fruit with id ${req.params.id}')
    })
    .put((req, res) => {
        res.send('put request')
    })
    .delete((req, res) => {
        res.send('delete request')
    })



module.exports = fruitRouter