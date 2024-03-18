import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { ControladorDePacientes } from "../controladores/ControladorDePacientes.js";

export class MenuPrincipal {
  #rl = readline.createInterface({ input, output });
  #pacienteController = new ControladorDePacientes();

  async iniciar() {
    while (true) {
      console.log("\nentrou aqui\n")
      this.#listarOpcoes();
      let escolha = await this.#rl.question("O que você quer fazer? ");
      if (escolha === "1") await this.#gerenciamentoDePacientes();
      if (escolha === "3") break;
    }
  }

  #listarOpcoes() {
    console.log("Menu Principal");
    console.log("1-Cadastro de pacientes");
    console.log("2-Agenda");
    console.log("3-Fim");
  }

  async #gerenciamentoDePacientes() {
    console.log("Gerenciamento de Pacientes");
    console.log("1-Cadastrar novo paciente");
    console.log("2-Listar todos os pacientes");
    console.log("3-Descadastrar um paciente");
    let escolha = await this.#rl.question("O que você quer fazer? ");
    if (escolha === "1") await this.#cadastrarNovoPaciente();
    if (escolha === "2") await this.#listarTodosOsPacientes();
    if (escolha === "3") await this.#removerUmPaciente();
  }

  async #cadastrarNovoPaciente() {
    const nome = await this.#rl.question("Nome: ");
    const cpf = await this.#rl.question("CPF: ");
    const dataDeNascimento = await this.#rl.question("Data de nascimento: ");
    this.#pacienteController.adicionar(nome, cpf, dataDeNascimento);
  }

  async #listarTodosOsPacientes() {
    const pacientes = this.#pacienteController.recuperarListaDePacientes();
    pacientes.forEach(paciente => {
      console.log(paciente.nome, paciente.cpf, paciente.dataDeNascimento);
    });
  }

  async #removerUmPaciente() {
    const cpf = await this.#rl.question("CPF: ");
    this.#pacienteController.excluirPaciente(cpf);
  }
}
