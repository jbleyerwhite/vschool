const express = require('express')
const bountyRouter = express.Router()


bountyRouter.get('/', (req, res) => {
    res.send('bounties')
})

bountyRouter.get('/:id', (req, res) => {
    res.send(bounties.find(bounty => bounty._id === req.params.id))
})

bountyRouter.post('/', (req, res) => {


})

bountyRouter.put('/:id', (reg, res) => {
    
})


module.exports = bountyRouter