import { Paciente } from "../model/Paciente.js";
import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class PacientesService {
  #consultasRepository = new ConsultasRepository();
  #pacientesRepository = new PacientesRepository();

  cadastrarNovoPaciente(nome, cpf, dataDeNascimento) {
    if (this.#pacientesRepository.existePacienteCadastradoComCpf(cpf)) {
      console.log("Já existe um paciente cadastrado com o CPF informado.");
      return false;
    }
    if (!this.#temTrezeAnosOuMais(dataDeNascimento)) {
      console.log("O paciente deve ter treze anos ou mais.");
      return false;
    }
    const novoPaciente = new Paciente(nome, cpf, dataDeNascimento);
    this.#pacientesRepository.cadastrar(novoPaciente);
    return true;
  }

  #temTrezeAnosOuMais(dataDeNascimento) {
    if (isNaN(dataDeNascimento)) throw "Data inválida."
    if (this.#calcularIdade(dataDeNascimento) >= 13) return true;
    else return false;
  }

  #calcularIdade(data) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - data.getFullYear();
    if (
      hoje.getMonth() < data.getMonth()
      || (hoje.getMonth() === data.getMonth() && hoje.getDate() < data.getDate())
    ) {
      return idade - 1;
    }
    return idade;
  }

  excluirPeloCpf(cpf) {
    if (!this.#pacientesRepository.existePacienteCadastradoComCpf(cpf)) {
      console.log("Não existe um paciente cadastrado com o CPF informado.");
      return false;
    }
    if (this.#pacienteComConsultaAgendadaFutura(cpf)) {
      console.log("Paciente com uma consulta agendada futura não pode ser excluído.");
      return false;
    }
    this.#excluirConsultasPassadas(cpf);
    this.#pacientesRepository.excluir(cpf);
    return true;
  }

  #pacienteComConsultaAgendadaFutura(cpf) {
    return this.#consultasRepository.existeConsultaFuturaAgendadaParaPaciente(cpf);
  }

  #excluirConsultasPassadas(cpf) {
    this.#consultasRepository.excluirConsultasPassadasDeUmPaciente(cpf);
  }
}