import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
  const save = await Course.create(courseModel);
  return save;
};

const getAllCourses = async () => {
  return await Course.findAll({
    order: [["id", "ASC"]],
  });
};

const getCoursesById = async (id) => {
  return await Course.findByPk(id);
};

const deleteCourseById = async (id) => {
  return await Course.destroy({ where: { id: id } });
};

const updateCourseById = async (id, courseModel) => {
  try {
    const result = await Course.update(courseModel, { where: { id: id } });
    if (result(0) === 1) {
      return { message: "course updated successfully." };
    } else {
      return {
        message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`,
      };
    }
  } catch (error) {
    return { message: "Error updating course with id= " + id };
  }
};

const factory = {
  saveCourse,
  getAllCourses,
  getCoursesById,
  deleteCourseById,
  updateCourseById,
};

export default factory;
