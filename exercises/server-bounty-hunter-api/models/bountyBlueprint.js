const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    bounties: {
        firstName: String,
        lastName: String,
        living: Boolean,
        bountyAmount: Number,
        type: String
    }
})


module.export = mongoose.model("Bounty", bountySchema)

