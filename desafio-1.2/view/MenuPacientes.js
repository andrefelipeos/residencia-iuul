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
    if (this.#pacientesController.adicionar(nome, cpf, dataDeNascimento)) {
      console.log("Paciente cadastro com sucesso.");
    } else {
      console.log("Paciente não pode ser cadastrado.");
    }
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
    let cpf;
    let cpfInvalido = true;
    do {
      cpf = await this.#rl.question("CPF: ");
      if (!PacientesValidation.formatoCpfValido(cpf)) {
        console.log("CPF inválido – um CPF válido é formado por onze dígitos.");
      } else if (!PacientesValidation.cpfValido(cpf)) {
        console.log("CPF inválido.");
      } else {
        cpfInvalido = false;
      }
    } while (cpfInvalido);
    return cpf;
  }

  async #lerDataDeNascimentoDaEntrada() {
    let data;
    let dataInvalida = true;
    do {
      data = await this.#rl.question("Data de nascimento: ");
      if (!PacientesValidation.formatoDataValido(data)) {
        console.log("Data inválida - datas devem estar no formato DD/MM/AAAA.");
      } else if (!PacientesValidation.dataValida(data)) {
        console.log("Data inválida.");
      } else {
        dataInvalida = false;
      }
    } while (dataInvalida);
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
