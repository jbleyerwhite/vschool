const mongoose = require('mongoose')

const pantSchema = new mongoose.Schema ({
    designer: String,
    style: String,
    color: String,
    size: Number
})

module.export = (mongoose.model("Pant", pantSchema))