import { Paciente } from "../model/Paciente.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";
import { PacientesService } from "../service/PacientesService.js";

export class PacientesController {
  private pacientesRepository: PacientesRepository = new PacientesRepository();
  private pacientesService: PacientesService = new PacientesService();

  adicionar(nome: string, cpf: string, dataStr: string): boolean {
    dataStr = dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g,"\$2\/\$1\/\$3");
    return this.pacientesService.cadastrarNovoPaciente(nome, cpf, new Date(dataStr));
  }

  recuperarListaDePacientes(): Array<Paciente> {
    return this.pacientesRepository.recuperarTodos();
  }

  excluirPaciente(cpf: string): boolean {
    return this.pacientesService.excluirPeloCpf(cpf);
  }
}

