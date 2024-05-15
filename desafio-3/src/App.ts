import "dotenv/config";
import { Dialect, Sequelize } from "sequelize";
import { MenuPrincipal } from "./view/MenuPrincipal.js";

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  await sequelize.authenticate();
  console.log("A conexão foi estabelecida com sucesso.");
} catch (erro) {
  console.error("Incapaz de conectar ao banco de dados", erro);
}

sequelize.close();

const menu = new MenuPrincipal();
await menu.iniciar();

