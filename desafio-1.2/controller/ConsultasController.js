import { Consulta } from "../model/Consulta.js";
import { ConsultasRepository } from "../repository/ConsultasRepository.js";

export class ConsultasController {
  #consultasRepository = new ConsultasRepository();

  cadastrarAgendamento(cpfDoPaciente, dataStr, horaInicial, horaFinal) {
    const data = new Date(dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g,"\$2\/\$1\/\$3"));
    const consulta = new Consulta(cpfDoPaciente, data, horaInicial, horaFinal);
    this.#consultasRepository.cadastrar(consulta);
  }

  removerAgendamento(cpfDoPaciente, data, horaInicial) {
    this.#consultasRepository.cancelar(cpfDoPaciente, data, horaInicial);
  }

  listarAgendamentos() {
    return this.#consultasRepository.recuperarTodas();
  }
}