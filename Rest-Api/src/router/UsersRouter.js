const express = require('express')
const app = express()
const {loadUser,getUserById} = require('../Controllers/userControllers')

app.get('/',loadUser)
app.get('/user/:id',getUserById)
// app.post('/user',addUser)

module.exports = app