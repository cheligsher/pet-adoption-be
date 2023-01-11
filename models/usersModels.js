let userCollection;

const accessDB = (client) => {
  userCollection = client.db("pet-adoption").collection("users")
};

const findUser = async (email) => {
  try{

  } catch(err){
    console.log(err)
  }
}

const getUserByEmail = async (email) => {
  try{
    const user = await userCollection.findOne({email})
    return user
  } catch (err){
      err.status = 401;
      throw err;
  }
};

const addUser = async (newUser) => {
  const user = await userCollection.insertOne(newUser)
  return user
};

const getUserById = async (id) => {
  const user = await userCollection.findOne({ _id : id})
  return user
}

module.exports = { getUserByEmail, addUser, accessDB, findUser, getUserById };
