const mongoose = require('mongoose')




const climbSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    img: String,
    rideNotes: String,
    distance: String,
    elevationGain: String,
    percentGrade: String,
    image: String,
    comments: [String],
    likes: Number
})


module.exports = mongoose.model("Climb", climbSchema)
