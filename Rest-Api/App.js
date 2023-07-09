const express = require('express')
const app = express()
const port = 3000
// get router
const userRouter = require('./src/router/UsersRouter')

// midleware
const path = require('path')
app.set(path.join(__dirname, 'src/router'))
app.use(express.urlencoded({extended: true}))




// router
app.use(userRouter)





app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})