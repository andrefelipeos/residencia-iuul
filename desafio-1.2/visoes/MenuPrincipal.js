import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { MenuAgendamentos } from "./MenuAgendamentos.js";
import { MenuPacientes } from "./MenuPacientes.js";

export class MenuPrincipal {
  #rl = readline.createInterface({ input, output });
  #menuAgendamento = new MenuAgendamentos(this.#rl);
  #menuPacientes = new MenuPacientes(this.#rl)

  async iniciar() {
    while (true) {
      this.#listarOpcoes();
      let escolha = await this.#rl.question("O que você quer fazer? ");
      if (escolha === "1") await this.#menuPacientes.executar();
      if (escolha === "2") await this.#menuAgendamento.executar();
      if (escolha === "3") break;
    }
  }

  #listarOpcoes() {
    console.log("Menu Principal");
    console.log("1-Cadastro de pacientes");
    console.log("2-Agenda");
    console.log("3-Fim");
  }
}
