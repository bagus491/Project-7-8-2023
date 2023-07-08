const mongose = require('mongoose')
const {MongoClient} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017/bagus'

mongose.connect(url,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((err,result) => {
    if(!err){
        console.log('gagal terhubung ke database')
    }

    console.log('berhasil terhubung ke database')
})