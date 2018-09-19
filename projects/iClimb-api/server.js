const express = require ('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000
const rideRoutes = require('./routes/rideRoutes')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/iClimbapp', { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err))


app.use('/climb', rideRoutes) 
// ENDPOINT:  climb  


app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})