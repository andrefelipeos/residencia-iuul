import { PacientesController } from "../controller/PacientesController.js";

export class MenuPacientes {
  #rl;
  #pacientesController = new PacientesController();

  constructor(readliner) {
    this.#rl = readliner;
  }

  async executar() {
    this.#listarOpcoes();
    let escolha = await this.#rl.question("O que você quer fazer? ");
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
    const nome = await this.#rl.question("Nome: ");
    const cpf = await this.#rl.question("CPF: ");
    const dataDeNascimento = await this.#rl.question("Data de nascimento: ");
    this.#pacientesController.adicionar(nome, cpf, dataDeNascimento);
  }

  async #listarTodosOsPacientes() {
    const pacientes = this.#pacientesController.recuperarListaDePacientes();
    pacientes.forEach(paciente => {
      console.log(paciente.nome, paciente.cpf, paciente.dataDeNascimento);
    });
  }

  async #removerUmPaciente() {
    const cpf = await this.#rl.question("CPF: ");
    this.#pacientesController.excluirPaciente(cpf);
  }
}
