const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')



app.use(express.json())
app.use(morgan('dev'))

//MONGO
mongoose.connect('mongodb://localhost:27017/introdb', { useNewUrlParser: true })
 .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err))

  //ROUTES// 
app.use('/cars', require('./routes/carRoutes'))    

app.get('/', (req, es) => {
    res.send('hello world')
})


app.post('/', (req, es) => {
    res.send(req, body)
})





app.listen(5500, () => {
    console.log('Server is running on Port 5500')
})