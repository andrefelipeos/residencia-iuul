import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class PacientesController {
  #pacientesRepository = new PacientesRepository();

  adicionar(nome, cpf, data) {
    let novoPaciente = new Paciente(nome, cpf, data);
    this.#pacientesRepository.create(novoPaciente);
  }

  recuperarListaDePacientes() {
    return this.#pacientesRepository.getAll();
  }

  excluirPaciente(cpf) {
    this.#pacientesRepository.delete(cpf);
  }
}
