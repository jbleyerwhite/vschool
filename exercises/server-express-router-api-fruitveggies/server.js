const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5555
const veggieRouter = require('./veggieRouter')
const fruitRouter = require('./fruitRouter')
app.use(bodyParser.json())




app.use('/veggie', veggieRouter)

app.use('/fruits', fruitRouter)





app.listen(5555,() => {
    // console.log('listening on port ${port}')
})

// module.exports = app