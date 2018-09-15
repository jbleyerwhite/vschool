const express =require('express')
const carRouter = express.Router()
const Cars = require('../models/carModels')


///// BUILD ROUTES//////
///////////////////////
//.find() .findOne() .findById() READ METHODS:  .find([query], [callback])

// GET:
carRouter.get('/', (req, res) => {
   Cars.find((err, allTheCars) => {
        if(err) return res.status(500).send({msg: "A server error occured"})
        return res.status(200).send(allTheCars)
   })
})


// GET just 1:
carRouter.get('/:id', (req, res) => {
   Cars.findById(req.params.id, (err, foundCar) => {
       if(err) return res.status(500).send(err)
       return res.status(200).send(foundCar)
   })
})

carRouter.post('/', (req, res) => {
    const newCar = new Cars(req.body)
    // save is a mongoose method
    newCar.save((err, newSavedCar)=> {
        if(err) return res.status(500).send(err)
        return res.status(201).send({ newSavedCar: newSavedCar, msg: 'Car has been saved'})
        // (201) is the error for saved data
    })
})

carRouter.put('/:id', (req, res) => {
   Cars.findOneAndUpdate(
       { _id: req.params.id }, // Find this object by ot's Id
        req.body,              // Update it with the user's object in req.body
        { new: true },          // Request the updated object back in the response
        (err, updatedCar) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(updatedCar)
        })
})

carRouter.delete('/:id', (req, res) => {
   Cars.findOneAndRemove(
       { _id: req.params.id },
       (err, deleteCar) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send({ msg: "Car deleted", deletedCar })
                // use status(204) if you don't want the message to come back
       })
})




module.exports = carRouter