const express = require('express')
const shoeRoutes = express.Router()
const Shoes = require('../models/shoe')
// const Pant = require('..models/pantModels')
// const Dress = require('../models/dressModels')



//ROUTES//
shoeRoutes.get('/', (req, res) => {
    Shoes.find((err, allTheShoes) => {
        if(err) return res.status(500).send(allTheShoes)
        return res.status(200).send(allTheShoes)
    })
})


shoeRoutes.get('/:id', (req, res) => {
    Shoes.findById(req.params.id, (err, foundShoes) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(foundShoes)
    })
})


shoeRoutes.post('/', (req, res) => {
    const newShoes = new Shoes(req.body)
    newShoes.save((err, newSavedShoes) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send({ newSavedShoes: newSavedShoes, msg:"Your shoes have been added to your cart" })
    })
})


shoeRoutes.put('/:id', (req, res) => {
    Shoes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,              
        { new: true },          // Request the updated object back in the response
        (err, updatedShoes) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(updatedShoes)
    })
})


shoeRoutes.delete('/:id', (req, res) => {
    Shoes.findOneAndRemove(
        { _id: req.params.id },
        (err, deleteShoes) => {
             if(err) return res.status(500).send(err)
             return res.status(200).send({ msg: "Shoes deleted", deleteShoes })
    })

})


module.exports = shoeRoutes