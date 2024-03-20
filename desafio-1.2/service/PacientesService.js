import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class PacientesService {
  #consultasRepository = new ConsultasRepository();
  #pacientesRepository = new PacientesRepository();

  excluirPeloCpf(cpf) {
    if (this.#pacienteComConsultaAgendadaFutura(cpf)) {
      throw "Paciente com uma consulta agendada futura não pode ser excluído."
    }
    this.#excluirConsultasPassadas(cpf);
    this.#pacientesRepository.excluir(cpf);
  }

  #pacienteComConsultaAgendadaFutura(cpf) {
    return this.#consultasRepository.existeConsultaFuturaAgendadaParaPaciente(cpf);
  }

  #excluirConsultasPassadas(cpf) {
    this.#consultasRepository.excluirConsultasPassadasDeUmPaciente(cpf);
  }
}