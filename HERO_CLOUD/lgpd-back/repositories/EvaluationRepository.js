import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
  const save = await Evaluation.create(evaluationModel);
  return save;
};

const getAllEvaluations = async () => {
  return await Evaluation.findAll({
    order: [["id", "ASC"]],
  });
};

const getEvaluationsById = async (id) => {
  return await Evaluation.findByPk(id);
};

const deleteEvaluationById = async (id) => {
  return await Evaluation.destroy({ where: { id: id } });
};

const updateEvaluationById = async (id, evaluationModel) => {
  try {
    const result = await Evaluation.update(evaluationModel, {
      where: { id: id },
    });
    if (result(0) === 1) {
      return { message: "evaluation updated successfully." };
    } else {
      return {
        message: `Cannot update evaluation with id=${id}. Maybe evaluation was not found or req.body is empty!`,
      };
    }
  } catch (error) {
    return { message: "Error updating evaluation with id= " + id };
  }
};
const factory = {
  saveEvaluation,
  getAllEvaluations,
  getEvaluationsById,
  deleteEvaluationById,
  updateEvaluationById,
};

export default factory;
