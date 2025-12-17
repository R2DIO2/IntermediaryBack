import { sequelize } from "sequelize";

const sequelize = new sequelize("lgpd_database", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default sequelize;
