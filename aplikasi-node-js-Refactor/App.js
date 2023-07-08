const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const Users = require('./src/router/UserRouter')

//midleware
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)
app.set('views',path.join(__dirname,'src/views'))
app.set('router',path.join(__dirname, 'src/router'))
app.use(express.static('./src/public'))


//database
require('./src/utils/db')

app.use(Users)


app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})