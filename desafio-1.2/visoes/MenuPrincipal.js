import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
//inclusão de um paciente
import { ControladorDePacientes } from "../controladores/ControladorDePacientes.js";

const rl = readline.createInterface({ input, output });

export class MenuPrincipal {
  #pacienteController = new ControladorDePacientes();
  async iniciar() {
    this.#listarOpcoes();
    let escolha = await rl.question("O que você quer fazer? ");
    if (escolha === "1") this.#gerenciamentoDePacientes();
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
    let escolha = await rl.question("O que você quer fazer? ");
    if (escolha === "1") this.#cadastrarNovoPaciente();
  }

  async #cadastrarNovoPaciente() {
    const nome = await rl.question("Nome: ");
    const cpf = await rl.question("CPF: ");
    const dataDeNascimento = await rl.question("Data de nascimento: ");
    this.#pacienteController.adicionar(nome, cpf, dataDeNascimento);
  }
}
