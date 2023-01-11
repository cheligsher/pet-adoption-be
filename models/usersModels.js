let userCollection;

const accessDB = (client) => {
  userCollection = client.db("pet-adoption").collection("users")
};


const getUserByEmail = async (email) => {
  // find if there is this email on the db
  try{
    const user = await userCollection.findOne({email})
    return user
  } catch (err){
    console.log(err.message)
  }
};

const signUpModel = (newUser) => {
  // token?
};

module.exports = { getUserByEmail, signUpModel, accessDB };
