import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Evaluation = sequelize.define(
  "evaluations",
  {
    id: {
      type: DataTypes.INTERGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Evaluation;
