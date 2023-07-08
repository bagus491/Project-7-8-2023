const mongose = require('mongoose')


const Contacts = mongose.model('contacts', 
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

module.exports = Contacts