const User = require('../mongoDB/user')

const getAllUsers = async() => {
  try{
    const allUsers = await User.find()
    return allUsers
  }catch(err){
    console.log(err.message)
  }
}

const findUser = async (email) => {
  try{

  } catch(err){
    console.log(err)
  }
}

const getUserByEmail = async (email) => {
  try{
    const user = await User.findOne({email})
    return user
  } catch (err){
      err.status = 401;
      throw err;
  }
};

const addUser = async (newUser) => {
  const user = await User.create(newUser)
  return user
};

const getUserById = async (id) => {
  const user = await User.findOne({ _id : id})
  return user
}

module.exports = { getUserByEmail, addUser, findUser, getUserById, getAllUsers };
