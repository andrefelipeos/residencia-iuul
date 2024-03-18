export class Agenda {
  #pacientes = [];
  #consultas = [];

  get pacientes() {
    return this.#pacientes;
  }

  get consultas() {
    return this.#consultas;
  }

  incluirPaciente(paciente) {
    this.#pacientes.push(paciente);
  }

  excluirPaciente(cpf) {
    this.#pacientes = this.#pacientes.filter(paciente => paciente.cpf !== cpf);
  }

  agendarConsulta(consulta) {
    this.#consultas.push(consulta);
  }

  cancelarAgendamento(cpf, data, horaInicial) {
    this.#consultas = this.#consultas.filter(consulta => {
      consulta.cpf !== cpf || consulta.data !== data || consulta.horaInicial !== horaInicial;
    })
  }
}