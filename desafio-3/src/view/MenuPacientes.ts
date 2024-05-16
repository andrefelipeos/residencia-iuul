import { LeitorDadosTerminal } from "../utils/LeitorDadosTerminal.js";
import { Paciente } from "../model/Paciente.js";
import { PacientesController } from "../controller/PacientesController.js";

export class MenuPacientes {
  private pacientesController: PacientesController = new PacientesController();

  async executar(): Promise<void> {
    this.listarOpcoes();
    let escolha: string = await LeitorDadosTerminal.lerOpcaoDeMenu();
    if (escolha === "1") await this.cadastrarNovoPaciente();
    if (escolha === "2") await this.listarTodosOsPacientes();
    if (escolha === "3") await this.removerUmPaciente();
  }

  private listarOpcoes(): void {
    console.log("Gerenciamento de Pacientes");
    console.log("1-Cadastrar novo paciente");
    console.log("2-Listar todos os pacientes");
    console.log("3-Descadastrar um paciente");
  }

  private async cadastrarNovoPaciente(): Promise<void> {
    const nome: string = await LeitorDadosTerminal.lerNome();
    const cpf: string = await LeitorDadosTerminal.lerCpf();
    const dataDeNascimento: string = await LeitorDadosTerminal.lerData("Data de nascimento: ");
    if ((await this.pacientesController.adicionar(nome, cpf, dataDeNascimento)) !== null) {
      console.log("O paciente foi cadastrado com sucesso.");
    } else {
      console.log("O paciente não pode ser cadastrado.");
    }
  }

  private async listarTodosOsPacientes(): Promise<void> {
    const pacientes: Array<Paciente> = this.pacientesController.recuperarListaDePacientes();
    pacientes.forEach(paciente => {
      console.log(paciente.nome, paciente.cpf, paciente.dataDeNascimento);
    });
  }

  private async removerUmPaciente(): Promise<void> {
    const cpf: string = await LeitorDadosTerminal.lerCpf();
    if (this.pacientesController.excluirPaciente(cpf)) {
      console.log("Paciente removido com sucesso.");
    } else {
      console.log("Não foi possível remover o paciente.");
    }
  }
}

