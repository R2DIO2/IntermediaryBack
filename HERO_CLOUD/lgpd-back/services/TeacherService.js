import teacherRepository from "../repositories/TeacherRepository.js";
const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
};

const getAllTeachers = () => {
  return teacherRepository.getAllTeachers();
};

const deleteTeacher = (id) => {
  return teacherRepository.deleteTeacher(id);
};

const updateTeacher = (teacherModel) => {
  return teacherRepository.updateTeacher(teacherModel);
};
const service = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacher,
  updateTeacher,
};

export default service;
