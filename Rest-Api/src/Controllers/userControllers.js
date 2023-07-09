require('../utils/db')
const contact = require('../models/Contact')


// load users
 const loadUser = async(req,res) => {
  try{
    const Users = await contact.find()
    res.json(Users)
  }catch{
    res.status(404)
  }
}

//getDatabyid
const getUserById = async(req,res) => {
  try{
    const Users = await contact.findOne({_id: req.params.id})
    res.json(Users)
  }catch{
    res.status(401)
  }
}

//add data

// const addUser = async (req,res) => {
//   const {Nama,noHp,Email} = req.body
//   try{
    
//     console.log(req.body)
//   }catch{
//     res.status(404)
//   }
// }

module.exports = {loadUser,getUserById}