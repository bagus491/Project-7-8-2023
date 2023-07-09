// database
const Mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/bagus';

Mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((err,res) => {
    console.log('berhasil connect ke database')
})