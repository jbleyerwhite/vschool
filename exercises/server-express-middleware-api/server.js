const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const footballRouter = require('./footballRouter')
const port = 5000

app.use(bodyParser.json())
app.use(morgsn('dev'))
//use & install Morgan  npm i morgan  const mrogan = require('morgan')


app.use((req, res, next) => {
    console.log('we are heading to the superbowl')
    next()
})


app.use('/football', footballRouter)



app.listen(4000, () => {
    // console.log('listening on port ${port}')
})