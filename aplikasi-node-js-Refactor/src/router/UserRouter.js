const express = require('express')
const app = express()
const {getUsers} = require('../Controller/UserController')


app.get('/',getUsers)




module.exports = app