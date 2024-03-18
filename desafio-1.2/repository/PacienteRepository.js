import { BancoDeDados } from "../BancoDeDados.js";

export class PacienteRepository {
  create(paciente) {
    BancoDeDados.agendas[0].incluirPaciente(paciente);
  }

  getAll() {
    return BancoDeDados.agendas[0].pacientes;
  }

  delete(cpf) {
    BancoDeDados.agendas[0].excluirPaciente(cpf);
  }
}
