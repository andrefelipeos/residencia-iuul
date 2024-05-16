import { Paciente } from "../model/Paciente.js";
import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class PacientesService {
  private consultasRepository: ConsultasRepository = new ConsultasRepository();
  private pacientesRepository: PacientesRepository = new PacientesRepository();

  async cadastrarNovoPaciente(nome: string, cpf: string, dataDeNascimento: Date): Promise<Paciente | null> {
    if (this.pacientesRepository.existePacienteCadastradoComCpf(cpf)) {
      console.log("Já existe um paciente cadastrado com o CPF informado.");
      return null;
    }
    if (!this.temTrezeAnosOuMais(dataDeNascimento)) {
      console.log("O paciente deve ter treze anos ou mais.");
      return null;
    }
    const novoPaciente: Paciente = Paciente.build({ nome, cpf, dataDeNascimento });
    return this.pacientesRepository.cadastrar(novoPaciente);
  }

  private temTrezeAnosOuMais(dataDeNascimento: Date): boolean {
    if (isNaN(dataDeNascimento.getTime())) throw "Data inválida."
    if (this.calcularIdade(dataDeNascimento) >= 13) return true;
    else return false;
  }

  private calcularIdade(data: Date): number {
    const hoje: Date = new Date();
    let idade: number = hoje.getFullYear() - data.getFullYear();
    if (
      hoje.getMonth() < data.getMonth()
      || (hoje.getMonth() === data.getMonth() && hoje.getDate() < data.getDate())
    ) {
      return idade - 1;
    }
    return idade;
  }

  excluirPeloCpf(cpf: string): boolean {
    if (!this.pacientesRepository.existePacienteCadastradoComCpf(cpf)) {
      console.log("Não existe um paciente cadastrado com o CPF informado.");
      return false;
    }
    if (this.pacienteTemConsultaAgendadaFutura(cpf)) {
      console.log("Paciente com uma consulta agendada futura não pode ser excluído.");
      return false;
    }
    this.excluirConsultasPassadas(cpf);
    this.pacientesRepository.excluir(cpf);
    return true;
  }

  pacienteTemConsultaAgendadaFutura(cpf: string): boolean {
    return this.consultasRepository.existeConsultaFuturaAgendadaParaPaciente(cpf);
  }

  excluirConsultasPassadas(cpf: string): void {
    this.consultasRepository.excluirConsultasPassadasDeUmPaciente(cpf);
  }
}

