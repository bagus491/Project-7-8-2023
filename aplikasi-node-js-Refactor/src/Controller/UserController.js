const Contacts = require('../models/Contacts')



const getUsers = async (req,res) => {
    try{
        const data = await Contacts.find()
       res.status(200).json(data)

    }catch{
        res.status(404)
    }
}


module.exports  = {getUsers}
