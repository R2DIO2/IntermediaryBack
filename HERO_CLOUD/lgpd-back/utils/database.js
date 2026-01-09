import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "Diogenes100", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default sequelize;
