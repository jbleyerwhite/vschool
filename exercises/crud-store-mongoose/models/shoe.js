const mongoose = require('mongoose')

const shoeSchema = new mongoose.Schema ({
    designer: {
        type: String,
        required: true
    },
    style: String,
    color: String,
    size: Number,
    comments: [String]
})

module.exports = mongoose.model("Shoes", shoeSchema)