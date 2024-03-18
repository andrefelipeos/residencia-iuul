import { Agenda } from "../modelos/Agenda.js";
import { Consulta } from "../modelos/Consulta.js";

export class ControladorDeAgendamento {
  #agenda = new Agenda();

  cadastrarAgendamento(cpfDoPaciente, data, horaInicial, horaFinal) {
    const consulta = new Consulta(cpfDoPaciente, data, horaInicial, horaFinal);
    this.#agenda.agendarConsulta(consulta);
  }

  removerAgendamento(cpfDoPaciente, data, horaInicial) {
    this.#agenda.cancelarAgendamento(cpfDoPaciente, data, horaInicial);
  }

  listarAgendamentos() {
    return this.#agenda.consultas;
  }
}