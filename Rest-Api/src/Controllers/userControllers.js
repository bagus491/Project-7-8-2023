require('../utils/db')
const contact = require('../models/Contact')


// load users
 const loadUser = async(req,res) => {
  try{
    const Users = await contact.find()
    res.send(Users)
  }catch{
    res.send('error')
  }
}


module.exports = {loadUser}