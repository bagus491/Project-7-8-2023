const express = require('express')
const app = express()
const port = 3000
// get router
const userRouter = require('./src/router/UsersRouter')

// midleware
const path = require('path')
app.set(path.join(__dirname, 'src/router'))
app.use(express.urlencoded({extended: true}))

// database
const Mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/newData';

Mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((err,res) => {
    console.log('berhasil connect ke database')
})


// router
app.use(userRouter)





app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})