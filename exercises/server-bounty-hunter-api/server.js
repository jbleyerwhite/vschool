const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const morgan = require('morgan')
const mongoose = require('mongoose')

// bodyParser: converts it a JSON file.  This is displayed on API
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/introdb', { useNewUrlParser: true })
 .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err))


//MIDDLEWARE:  can be placed at top or below mock database b4 Routes//
//USE is the middleware

//Mock Database:  Collections//
const bounties = [
    {
        firstName: 'Vlad',
        lastName: 'Jones',
        living: true,
        bountyAmount: 2000,
        type: 'awsome',
        id: '123'
    }
]


//////////
//ROUTES//
//////////
app.get('/bounties', (req, res) => {
    res.send(bounties)
})

app.get('/bounties/:id', (req, res) => {
    const bountySelect = bounties.find(bounty => bounty.id === req.params.id);
    res.send(bountySelect)
})


    // GET a single bounty//
// app.get('/bounties/:id', (req, res) => {
//         const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
//         console.log(req.params)
//     )
//         res.send(foundBounty[0])
// }}

    // POST a New bounty //
app.post('/bounties', (req, res) => {
    req.body.id = uuid()
    bounties.push(req.body)
    res.send(bounties)

})

    // PUT a bounty
    app.put('/bounties/:id', (req, res) => {
        const bountyToUpdate = bounties.find(bounty => bounty.id === req.params.id);
        const bountytoReplace = bounties.findIndex(bounty => bounty.id === req.params.id);
        const updatedObject = Object.assign(bountyToUpdate, req.body);
        bounties.splice(bountytoReplace, 1, updatedObject);
        res.send(bounties) 
    })



    // DELETE a bounty
app.delete('/bounties/:id', (req, res) => {
    console.log(req.params)
    const bountiesIndex = bounties.findIndex(bounty => bounty.id === req.params.id)
    bounties.splice(bountiesIndex, 1)
    res.send(bounties)
})

app.listen(4000, () => {

})




// app.put('/bounties/:id', (req, res) => {
//    const bountiesIndex = bounties.findIndex(bounty => bounty.id === req.params.id)
//    let currentObject = bounties[bountiesIndex]
//    let updatedObject = req.body 

//     for(let cKeys in currentObject) {
//         for (let uKeys in updatedObject){
//             if (cKeys === uKeys){
//                 currentObject[cKeys] = updatedObject[uKeys]
//             }
//         }
//     }
//     res.send(bounties)
// })