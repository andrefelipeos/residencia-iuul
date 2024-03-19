import { PacientesRepository } from "../repository/PacientesRepository";

export class PacientesService {
  #pacientesRepository = new PacientesRepository
  excluirPeloCpf(cpf) {
    if (this.#pacienteComConsultaAgendadaFutura(cpf)) {
      throw "Paciente com uma consulta agendada futura não pode ser excluído."
    }
    this.#excluirConsultasPassadas(cpf);
    this.#pacientesRepository.excluir(cpf);
  }

  #pacienteComConsultaAgendadaFutura(cpf) {}

  #excluirConsultasPassadas(cpf) {}
}