import { DataTypes, Dialect, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export class Paciente extends Model {
  declare nome: string;
  declare cpf: string;
  declare dataDeNascimento: string;
}

Paciente.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataDeNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pacientes",
  },
);

(async () => {
  await sequelize.sync({ force: true });
})();

