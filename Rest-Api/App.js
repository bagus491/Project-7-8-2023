const express = require('express')
const app = express()
const port = 3000
// get router
const userRouter = require('./src/router/UsersRouter')

// midleware
const path = require('path')
app.set(path.join(__dirname, 'src/router'))
app.use(express.urlencoded({extended: true}))


const cors = require('cors')
app.use(cors())

// router
app.use(userRouter)



app.use('/', (req,res)=> {
    res.status(404)
    res.send('404 NOT FOUND')
})

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})