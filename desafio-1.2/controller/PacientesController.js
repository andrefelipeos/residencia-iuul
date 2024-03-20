import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";
import { PacientesService } from "../service/PacientesService.js";

export class PacientesController {
  #pacientesRepository = new PacientesRepository();
  #pacientesService = new PacientesService();

  adicionar(nome, cpf, dataStr) {
    dataStr = dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g,"\$2\/\$1\/\$3");
    return this.#pacientesService.cadastrarNovoPaciente(nome, cpf, new Date(dataStr));
  }

  recuperarListaDePacientes() {
    return this.#pacientesRepository.recuperarTodos();
  }

  excluirPaciente(cpf) {
    return this.#pacientesService.excluirPeloCpf(cpf);
  }
}
