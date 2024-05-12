import { LeitorDadosTerminal } from "../utils/LeitorDadosTerminal.js";
import { PacientesController } from "../controller/PacientesController.js";

export class MenuPacientes {
  #pacientesController = new PacientesController();

  async executar() {
    this.#listarOpcoes();
    let escolha = await LeitorDadosTerminal.lerOpcaoDeMenu();
    if (escolha === "1") await this.#cadastrarNovoPaciente();
    if (escolha === "2") await this.#listarTodosOsPacientes();
    if (escolha === "3") await this.#removerUmPaciente();
  }

  #listarOpcoes() {
    console.log("Gerenciamento de Pacientes");
    console.log("1-Cadastrar novo paciente");
    console.log("2-Listar todos os pacientes");
    console.log("3-Descadastrar um paciente");
  }

  async #cadastrarNovoPaciente() {
    const nome = await LeitorDadosTerminal.lerNome();
    const cpf = await LeitorDadosTerminal.lerCpf();
    const dataDeNascimento = await LeitorDadosTerminal.lerData("Data de nascimento: ");
    if (this.#pacientesController.adicionar(nome, cpf, dataDeNascimento)) {
      console.log("O paciente foi cadastrado com sucesso.");
    } else {
      console.log("O paciente não pode ser cadastrado.");
    }
  }

  async #listarTodosOsPacientes() {
    const pacientes = this.#pacientesController.recuperarListaDePacientes();
    pacientes.forEach(paciente => {
      console.log(paciente.nome, paciente.cpf, paciente.dataDeNascimento);
    });
  }

  async #removerUmPaciente() {
    const cpf = await LeitorDadosTerminal.lerCpf();
    if (this.#pacientesController.excluirPaciente(cpf)) {
      console.log("Paciente removido com sucesso.");
    } else {
      console.log("Não foi possível remover o paciente.");
    }
  }
}
