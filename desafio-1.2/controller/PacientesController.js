import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";
import { PacientesService } from "../service/PacientesService.js";

export class PacientesController {
  #pacientesRepository = new PacientesRepository();
  #pacientesService = new PacientesService();

  adicionar(nome, cpf, data) {
    let novoPaciente = new Paciente(nome, cpf, data);
    this.#pacientesRepository.cadastrar(novoPaciente);
  }

  recuperarListaDePacientes() {
    return this.#pacientesRepository.recuperarTodos();
  }

  excluirPaciente(cpf) {
    this.#pacientesService.excluirPeloCpf(cpf);
  }
}
