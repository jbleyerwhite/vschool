const mongoose = require('mongoose')

const dressSchema = new mongoose.Schema ({
    designer: String,
    style: String,
    color: String,
    size: Number
})

module.export = (mongoose.model("Dress", dressSchema))