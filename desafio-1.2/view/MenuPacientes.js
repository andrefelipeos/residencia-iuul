import { PacientesController } from "../controller/PacientesController.js";
import { PacientesValidation } from "../validation/PacientesValidation.js";

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
    const nome = await this.#lerNomeDaEntrada();
    const cpf = await this.#lerCpfDaEntrada();
    const dataDeNascimento = await this.#lerDataDeNascimentoDaEntrada();
    this.#pacientesController.adicionar(nome, cpf, dataDeNascimento);
  }

  async #lerNomeDaEntrada() {
    let nome = await this.#rl.question("Nome: ");
    while (!PacientesValidation.tamanhoDoNomeValido(nome)) {
      console.log("O nome do paciente deve ter pelo menos cinco caracteres.");
      nome = await this.#rl.question("Nome: ");
    }
    return nome;
  }

  async #lerCpfDaEntrada() {
    let cpf = await this.#rl.question("CPF: ");
    while (!PacientesValidation.validarCpf(cpf)) {
      console.log("O CPF não é válido.");
      cpf = await this.#rl.question("CPF: ")
    }
    return cpf;
  }

  async #lerDataDeNascimentoDaEntrada() {
    let data = await this.#rl.question("Data de nascimento: ");
    while (!PacientesValidation.validarDataDeNascimento(data)) {
      console.log("Data inválida!");
      data = await this.#rl.question("Data de nascimento: ");
    }
    return data;
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
