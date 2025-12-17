import User from "./User";
import Teacher from "./Teacher";
import Evaluation from "./Evaluation";
import Course from "./Course";

const association = () => {
  Course.hasMany(Teacher);
  User.hasMany(Evaluation);
  Course.hasMany(Evaluation);
};

const factory = {
  association,
};

export default factory;
