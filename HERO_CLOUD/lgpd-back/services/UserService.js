import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) => {
  return userRepository.saveUser(userModel);
};

const getUserById = (id) => {
  return userRepository.getUserById(id);
};

const getAllUsers = () => {
  return userRepository.getAllUsers();
};

const deleteUser = (id) => {
  return userRepository.deleteUser(id);
};

const updateUser = (userModel) => {
  return userRepository.updateUser(userModel);
};

const service = {
  saveUser,
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
};

export default service;
