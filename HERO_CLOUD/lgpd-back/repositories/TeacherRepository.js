import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
  const save = await Teacher.create(teacherModel);
  return save;
};

const getAllTeachers = async () => {
  return await Teacher.findAll({
    order: [["id", "ASC"]],
  });
};

const getTeachersById = async (id) => {
  return await Teacher.findByPk(id);
};

const deleteTeacherById = async (id) => {
  return await Teacher.destroy({ where: { id: id } });
};

const updateTeacherById = async (id, teacherModel) => {
  try {
    const result = await Teacher.update(teacherModel, { where: { id: id } });
    if (result(0) === 1) {
      return { message: "Teacher updated successfully." };
    } else {
      return {
        message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`,
      };
    }
  } catch (error) {
    return { message: "Error updating Teacher with id= " + id };
  }
};
const factory = {
  saveTeacher,
  getAllTeachers,
  getTeachersById,
  deleteTeacherById,
  updateTeacherById,
};

export default factory;
