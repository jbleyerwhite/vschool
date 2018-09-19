const express = require('express')
const rideRoutes = express.Router()
const Climbs = require('../models/climb')



//ROUTES:  //
rideRoutes.route('/')
    .get((req, res) => {
        Climbs.find((err, allTheClimbs) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allTheClimbs)
    })
})

    .post((req, res) => {
        console.log(req.body.title)
        const newClimbs = new Climbs (req.body)
        newClimbs.save((err, newSavedClimbs) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send({ newSavedClimbs: newSavedClimbs, msg:"Your ride comments have been posted" })
    })
})

    .post((req, res) => {
        console.log(req.body.title)
        const newComment = new Climbs (req.body)
        newComment.save((err, newSavedComments) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send({ newSavedClimbs: newSavedClimbs, msg:"Your ride comments have been posted" })
    })
})


    


rideRoutes.route('/:id')
    .get((req, res) => {
        Climbs.findById(req.params.id, (err, foundClimbs) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(foundClimbs)
    })
})

    .put((req, res) => {
        Climbs.findOneAndUpdate(
        { _id: req.params.id },
        req.body,              
        { new: true },          // Request the updated object back in the response
        (err, updatedClimbs) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(updatedClimbs)
    })
})

// rideRoutes.route('/:id')
//     .put ((req, res) => {
//         Climbs.findOneAndUpdate(
//             {_id: req.params.climbID},
//             {$push: {comments: comments}},
//             {new: true},
//             (err, updatedClimbs) => {
//                 console.log(updatedClimbs)
//                 return res.send(updatedClimbs)
//             }
//         )
//     })



    .delete((req, res) => {
        Climbs.findOneAndRemove(
        { _id: req.params.id },
        (err, deleteClimbs) => {
             if(err) return res.status(500).send(err)
             return res.status(202).send({ msg: "Comments deleted", deleteClimbs })
    })

})



module.exports = rideRoutes


 // use status 204 if not sending a message 