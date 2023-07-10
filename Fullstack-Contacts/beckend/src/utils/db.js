const mongoose = require('mongoose')

const Url = 'mongodb://127.0.0.1:27017/bagus'


mongoose.connect(Url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((err,result) => {
    console.log('berhasil connect ke database')
})