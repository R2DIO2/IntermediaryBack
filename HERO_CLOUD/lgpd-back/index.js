import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";
import sequelize from "./utils/database.js";
import association from "./models/associations.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));

(async () => {
  try {
    association.associations();
    await sequelize.sync();
    app.listen(3000, function () {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados:", error);
  }
})();

app.use("/", router);
