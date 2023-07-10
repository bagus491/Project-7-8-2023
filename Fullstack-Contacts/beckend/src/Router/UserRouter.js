const express = require('express')
const app = express()
const {loadUsers,detailsUser,DeleteUsers,addUser,updateUser} = require('../Controllers/UserControllers')

app.get('/',loadUsers)
app.get('/details/:id',detailsUser)
app.post('/addUsers',addUser)
app.delete('/delete/:id',DeleteUsers)
app.put('/updateuser/:id',updateUser)

module.exports = app