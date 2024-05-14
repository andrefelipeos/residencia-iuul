import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { ConsultasService } from "../service/ConsultasService.js";

export class ConsultasController {
  #consultasRepository = new ConsultasRepository();
  #consultasService = new ConsultasService();

  cadastrarAgendamento(cpfDoPaciente, dataStr, horaInicial, horaFinal) {
    const data = new Date(dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "\$2\/\$1\/\$3"));
    this.#consultasService.agendarConsulta(cpfDoPaciente, data, horaInicial, horaFinal);
  }

  removerAgendamento(cpfDoPaciente, data, horaInicial) {
    this.#consultasRepository.cancelar(cpfDoPaciente, data, horaInicial);
  }

  listarAgendamentos() {
    return this.#consultasRepository.recuperarTodas();
  }
}