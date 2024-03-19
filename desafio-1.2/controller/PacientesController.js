import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class PacientesController {
  #pacientesRepository = new PacientesRepository();

  adicionar(nome, cpf, data) {
    let novoPaciente = new Paciente(nome, cpf, data);
    this.#pacientesRepository.cadastrar(novoPaciente);
  }

  recuperarListaDePacientes() {
    return this.#pacientesRepository.recuperarTodos();
  }

  excluirPaciente(cpf) {
    this.#pacientesRepository.excluir(cpf);
  }
}
