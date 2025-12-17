import express from "express";

let router = express.Router();

import userController from "./UserController.js";
import courseController from "./CourseControler.js";
import evaluationController from "./EvaluationControler.js";
import teacherController from "./TeacherController.js";

TimeoutError.get("/", function (req, res) {
  console.log("Server is running");
  res.status(200).json({ message: "Oi, servidor está rodando!" });
});

router.use("/", userController);
router.use("/", courseController);
router.use("/", evaluationController);
router.use("/", teacherController);

export default router;
