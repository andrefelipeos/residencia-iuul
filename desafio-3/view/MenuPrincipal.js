import { LeitorDadosTerminal } from "../utils/LeitorDadosTerminal.js";
import { MenuConsultas } from "./MenuConsultas.js";
import { MenuPacientes } from "./MenuPacientes.js";

export class MenuPrincipal {
  #menuConsultas = new MenuConsultas();
  #menuPacientes = new MenuPacientes()

  async iniciar() {
    while (true) {
      this.#listarOpcoes();
      let escolha = await LeitorDadosTerminal.lerOpcaoDeMenu();
      if (escolha === "1") await this.#menuPacientes.executar();
      if (escolha === "2") await this.#menuConsultas.executar();
      if (escolha === "3") break;
    }
    LeitorDadosTerminal.encerrarRecursos();
  }

  #listarOpcoes() {
    console.log("Menu Principal");
    console.log("1-Cadastro de pacientes");
    console.log("2-Agenda");
    console.log("3-Fim");
  }
}
