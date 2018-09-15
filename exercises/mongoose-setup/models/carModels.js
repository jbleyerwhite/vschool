const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({ 
        make: {
            type: String,
            required: true,
            lowerCase: true,
            enum: ["dodge", "ford", "chevrolet", "gm"]
            // enum:  
        },
        model: String,
        year: Number,
        color: String
        // prevOwners: [{
        //     type: Object
        // }],
        // tireProvider: {
        //     // Object ID - reference from another collection:  2 properties
        //     type: Schema.Types.ObjectId,
        //     ref: "TireProvider"
        // }

})

// Model, Schema
module.exports = mongoose.model("Car", carSchema)
// module.exports  = mongoose.model("tireProvider")