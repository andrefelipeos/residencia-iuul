import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";
import { PacientesService } from "../service/PacientesService.js";

export class PacientesController {
  #pacientesRepository = new PacientesRepository();
  #pacientesService = new PacientesService();

  adicionar(nome, cpf, dataStr) {
    const data = new Date(dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g,"\$2\/\$1\/\$3"));
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
