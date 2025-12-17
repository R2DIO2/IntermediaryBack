import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
  return courseRepository.saveCourse(courseModel);
};

const getCourseById = (id) => {
  return courseRepository.getCourseById(id);
};

const getAllCourses = () => {
  return courseRepository.getAllCourses();
};

const deleteCourse = (id) => {
  return courseRepository.deleteCourse(id);
};

const updateCourse = (courseModel) => {
  return courseRepository.updateCourse(courseModel);
};
const service = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCourse,
  updateCourse,
};

export default service;
