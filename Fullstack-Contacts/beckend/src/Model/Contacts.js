const mongoose = require('mongoose')


const contacts = mongoose.model('contacts', 
{
    Nama: {
        type: String,
        require: true,
    },
    noHp: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    },
}
)


module.exports = contacts