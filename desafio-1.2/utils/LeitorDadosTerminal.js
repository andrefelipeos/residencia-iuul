import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export class LeitorDadosTerminal {
  static #rl = readline.createInterface({ input, output });

  static encerrarRecursos() {
    LeitorDadosTerminal.#rl.close();
  }

  static async lerOpcaoDeMenu(mensagem = "O que você deseja fazer? ") {
    return await LeitorDadosTerminal.#rl.question(mensagem);
  }

  static async lerHorario(mensagem = "Horário: ") {
    return await LeitorDadosTerminal.#rl.question(mensagem);
  }

  static async lerNome(mensagem = "Nome: ") {
    let nome = await LeitorDadosTerminal.#rl.question(mensagem);
    while (!PacientesValidation.tamanhoDoNomeValido(nome)) {
      console.log("O nome do paciente deve ter pelo menos cinco caracteres.");
      nome = await LeitorDadosTerminal.#rl.question(mensagem);
    }
    return nome;
  }

  static async lerCpf(mensagem = "CPF: ") {
    let cpf;
    let cpfInvalido = true;
    do {
      cpf = await LeitorDadosTerminal.#rl.question(mensagem);
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

  static async lerData(mensagem = "Data: ") {
    let data;
    let dataInvalida = true;
    do {
      data = await LeitorDadosTerminal.#rl.question(mensagem);
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
}