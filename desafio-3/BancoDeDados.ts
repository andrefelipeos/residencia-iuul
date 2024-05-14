import { Consulta } from "./src/model/Consulta.js";
import { Paciente } from "./src/model/Paciente.js";

export class BancoDeDados {
  static consultas: Array<Consulta> = [];
  static pacientes: Array<Paciente> = [];
}

