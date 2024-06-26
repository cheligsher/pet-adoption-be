const { findById } = require("../mongoDB/user");
const User = require("../mongoDB/user");

const getAllUsers = async () => {
  try {
    const allUsers = await User.find();
    return allUsers;
  } catch (err) {
    console.log(err.message);
  }
};

const findUser = async (email) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    err.status = 401;
    throw err;
  }
};

const addUser = async (newUser) => {
  try {
    const user = await User.create(newUser);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (updatedDetails, userId) => {
  const newUsersDetails = {
    firstName: updatedDetails.firstName,
    lastName: updatedDetails.lastName,
    email: updatedDetails.email,
    phone: updatedDetails.phone,
    password: updatedDetails.password,
  };
  try {
    const updatedUser =  await User.findByIdAndUpdate(userId, newUsersDetails, {
      upsert: false,
    });
    return updatedUser;
  } catch (err) {
    console.log(err);
  }
};

const adoptPet = async (petId, user) => {
  try {
    const addPetToUser = await User.findByIdAndUpdate(
      user,
      { $push: { adopted: petId } },
      { new: true }
    );
    console.log(addPetToUser);
    return addPetToUser;
  } catch (err) {
    console.log(err.message);
  }
};

const fosterPet = async (petId, user) => {
  try {
    const addPetToUser = await User.findByIdAndUpdate(
      user,
      { $push: { fostered: petId } },
      { new: true }
    );
    return addPetToUser;
  } catch (err) {
    console.log(err.message);
  }
};

const isPetAdopted = async (petId, userId) => {
  try {
    const adoptedPet = await User.find({ adopted: petId });
    return adoptedPet;
  } catch (err) {
    console.log(err.message);
  }
};

const findPetsByUserId = async (userId) => {
  try {
    const pets = await User.findById(userId, { adopted: 1, fostered: 1 });
    return pets;
  } catch (err) {
    console.log(err.message);
  }
};

const returnPet = async (petId, userId) => {
  // for adopted
  try {
    const pet = await User.findByIdAndUpdate(userId, {
      $pull: { adopted: petId, fostered: petId },
    });
    console.log("return pet", pet);
    return pet;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getUserByEmail,
  addUser,
  findUser,
  getUserById,
  getAllUsers,
  updateUser,
  adoptPet,
  fosterPet,
  isPetAdopted,
  findPetsByUserId,
  returnPet,
};
