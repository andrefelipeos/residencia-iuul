import { Paciente } from "../modelos/Paciente.js";
import { PacienteRepository } from "../repository/PacienteRepository.js";

export class ControladorDePacientes {
  #pacienteRepository = new PacienteRepository();

  adicionar(nome, cpf, data) {
    let novoPaciente = new Paciente(nome, cpf, data);
    this.#pacienteRepository.create(novoPaciente);
  }

  recuperarListaDePacientes() {
    return this.#pacienteRepository.getAll();
  }

  excluirPaciente(cpf) {
    this.#pacienteRepository.delete(cpf);
  }
}
