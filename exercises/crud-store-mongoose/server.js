const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')



app.use(express.json())
app.use(morgan('dev'))


  //ROUTES// 
app.use('/shoe', require('./routes/shoeRoutes'))
// app.use('/pant', require('./routes/pantRoutes'))
// app.use('/dress', require('./routes/dressRoutes'))


//MONGO
mongoose.connect('mongodb://localhost:27017/introdb', { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err))


app.listen(7000, () => {
    console.log('Server is running on Port 7000')
})