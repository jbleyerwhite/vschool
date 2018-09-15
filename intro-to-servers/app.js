const express = require('express')
const app = express()
//app is the SERVER


// below is where you write all Mongoose Code:


// GET ROUTE:
// Arguments:  1)  base url  2) (Request , Response)  3)  
app.get('/', (req, res)  => {
    res.send( 'hello world')

app.get('/', (req, res) => {
    res.send('this is the home page')
})
        // what do we want to send back to client (in the parenthesis)

})


// SERVER SETUP & PORT:
// 1)  What port to listen for &  2) an anonomym function
app.listen(6000, () => {
    console.log('yo the server is running on port 6000')
})


//In Terminal:  node sercver.js

// ONLY DO ONCE!!!   npm install -g nodemon
// nodemon server.js