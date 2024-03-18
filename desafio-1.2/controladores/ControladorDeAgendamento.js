import { Consulta } from "../modelos/Consulta.js";

export class ControladorDeAgendamento {
  #consultasRepository = new this.#consultasRepository();

  cadastrarAgendamento(cpfDoPaciente, data, horaInicial, horaFinal) {
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