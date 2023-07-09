
const Mongoose = require('mongoose')

const contact = Mongoose.model('contacts', 
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

module.exports = contact