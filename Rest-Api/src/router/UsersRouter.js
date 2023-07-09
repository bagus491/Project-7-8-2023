const express = require('express')
const app = express()
const {loadUser} = require('../Controllers/userControllers')

app.get('/',loadUser)



module.exports = app