const express = require ('express')
const footballRouter = express.Router()


const football = [
    {
        type: 'quarterback',
        id: 1
    },
    {
        tyoe: 'receiver',
        id: 2
    },{
        type: 'coach',
        id: 3
    }
]

//ROUTES//
footballRouter.route('/')
    .get((req, res) => {
        res.send(football)
    })
    .post((req, res) => {
        football.push(req.body)
        res.send('toughdown')
    })

    footballRouter.route('/:id')
    .put((req, res) => {
        res.send('going to the superbowl')
    })
    .delete((req,res) => {
        res.send(football)
    })


    // app.post('football', (req, res) => {
    //     res.send('touchdown')
    // })



    module.exports = footballRouter

