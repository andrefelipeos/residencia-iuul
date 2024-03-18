import { BancoDeDados } from "../BancoDeDados.js";

export class PacienteRepository {
  create(paciente) {
    BancoDeDados.agendas[0].incluirPaciente(paciente);
  }
}
