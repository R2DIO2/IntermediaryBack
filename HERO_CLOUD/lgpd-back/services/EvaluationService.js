import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
  return evaluationRepository.saveEvaluation(evaluationModel);
};

const getEvaluationById = (id) => {
  return evaluationRepository.getEvaluationById(id);
};

const getAllEvaluations = () => {
  return evaluationRepository.getAllEvaluations();
};

const deleteEvaluation = (id) => {
  return evaluationRepository.deleteEvaluation(id);
};

const updateEvaluation = (evaluationModel) => {
  return evaluationRepository.updateEvaluation(evaluationModel);
};

const service = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluations,
  deleteEvaluation,
  updateEvaluation,
};

export default service;
