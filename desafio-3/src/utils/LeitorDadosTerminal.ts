import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { PacientesValidation } from "../validation/PacientesValidation.js";

export class LeitorDadosTerminal {
  private static rl = readline.createInterface({ input, output });

  static encerrarRecursos(): void {
    LeitorDadosTerminal.rl.close();
  }

  static async lerOpcaoDeMenu(mensagem: string = "O que você deseja fazer? "): Promise<string> {
    return await LeitorDadosTerminal.rl.question(mensagem);
  }

  static async lerHorario(mensagem: string = "Horário: "): Promise<string> {
    return await LeitorDadosTerminal.rl.question(mensagem);
  }

  static async lerNome(mensagem: string = "Nome: "): Promise<string> {
    let nome: string = await LeitorDadosTerminal.rl.question(mensagem);
    while (!PacientesValidation.tamanhoDoNomeValido(nome)) {
      console.log("O nome do paciente deve ter pelo menos cinco caracteres.");
      nome = await LeitorDadosTerminal.rl.question(mensagem);
    }
    return nome;
  }

  static async lerCpf(mensagem: string = "CPF: "): Promise<string> {
    let cpf: string;
    let cpfInvalido: boolean = true;
    do {
      cpf = await LeitorDadosTerminal.rl.question(mensagem);
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

  static async lerData(mensagem: string = "Data: "): Promise<string> {
    let data: string;
    let dataInvalida: boolean = true;
    do {
      data = await LeitorDadosTerminal.rl.question(mensagem);
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

