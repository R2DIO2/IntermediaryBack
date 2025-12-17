import User from "../models/User.js";

const saveUser = async (userModel) => {
  const save = await User.create(userModel);
  return save;
};

const getAllUsers = async () => {
  return await User.findAll({
    order: [["id", "ASC"]],
  });
};

const getUsersById = async (id) => {
  return await User.findByPk(id);
};

const deleteUserById = async (id) => {
  return await User.destroy({ where: { id: id } });
};

const updateUserById = async (id, userModel) => {
  try {
    const result = await User.update(userModel, { where: { id: id } });
    if (result(0) === 1) {
      return { message: "User updated successfully." };
    } else {
      return {
        message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
      };
    }
  } catch (error) {
    return { message: "Error updating User with id= " + id };
  }
};

const factory = {
  saveUser,
  getAllUsers,
  getUsersById,
  deleteUserById,
  updateUserById,
};

export default factory;
