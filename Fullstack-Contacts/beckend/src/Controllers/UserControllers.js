const contacts = require('../Model/Contacts')



//load user
const loadUsers = async (req,res) => {
    try{
        const data = await contacts.find()
        res.status(200).json(data)
    }catch{
        res.send('error')
    }
}


//details user
const detailsUser = async (req,res) => {
    try{
        const data = await contacts.findOne({_id: req.params.id})
        res.status(200).json(data)
    }catch{
        res.send('error')
    }
}


//adduser
const addUser = async (req,res) => {
    const contact = new contacts(req.body)
    try{
        const insertUser = await contact.save()
        res.status(201).json(insertUser)
    }catch{
        res.send('error')
    }
}
 
//Delete User
const DeleteUsers = async(req,res) => {
    try{
        const data = await contacts.deleteOne({_id:req.params.id})
        res.status(200).json(data)
    }catch{
        res.send('error')
    }
}

//updateUser
const updateUser = async (req,res) => {
 
    try{
        const insertUser = await contacts.updateOne(
            {
                _id: req.params.id
            },
            {
                $set:{
                    Nama: req.body.Nama,
                    noHp: req.body.noHp,
                    Email: req.body.Email
                }
            }
        )
        res.status(201).json(insertUser)
    }catch{
        res.send('error')
    }
}



module.exports = {loadUsers,detailsUser,DeleteUsers,addUser,updateUser}