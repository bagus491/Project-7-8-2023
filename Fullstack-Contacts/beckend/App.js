const express = require('express')
const app = express()
const port = 5000

//middleware
const path = require('path')
app.set(path.join(__dirname, 'src/Router'))

const cors = require('cors')
app.use(cors())

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// router
const UserRouter = require('./src/Router/UserRouter')


//database
require('./src/utils/db')

app.use(UserRouter)



app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})