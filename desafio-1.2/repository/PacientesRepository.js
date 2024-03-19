import { BancoDeDados } from "../BancoDeDados.js";

export class PacientesRepository {
  cadastrar(paciente) {
    BancoDeDados.pacientes.push(paciente);
  }

  excluir(cpf) {
    BancoDeDados.pacientes = BancoDeDados.pacientes.filter(paciente => paciente.cpf != cpf);
  }

  recuperarTodos() {
    return BancoDeDados.pacientes;
  }
}
