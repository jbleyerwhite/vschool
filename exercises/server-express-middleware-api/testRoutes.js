const express = require ('express')
const testRoutes = expressRouter()

testRoutes.route('/')
    .get((res, res) => {
        res.send('hello football team')
    })

    module.export = testRoutes