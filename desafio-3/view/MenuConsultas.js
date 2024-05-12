import { ConsultasController } from "../controller/ConsultasController.js";
import { LeitorDadosTerminal } from "../utils/LeitorDadosTerminal.js";

export class MenuConsultas {
  #consultasController = new ConsultasController();

  async executar() {
    this.#listarOpcoes();
    let escolha = await LeitorDadosTerminal.lerOpcaoDeMenu();
    if (escolha === "1") await this.#agendarConsulta();
    if (escolha === "2") await this.#listarConsultas();
    if (escolha === "3") await this.#cancelarAgendamento();
  }

  #listarOpcoes() {
    console.log("Menu de Agendamentos");
    console.log("1–Agendar consulta");
    console.log("2–Listar consultas");
    console.log("3–Cancelar agendamento");
  }

  async #agendarConsulta() {
    const cpf = await LeitorDadosTerminal.lerCpf();
    const data = await LeitorDadosTerminal.lerData();
    const horaInicial = await LeitorDadosTerminal.lerHorario("Horário inicial: ");
    const horaFinal = await LeitorDadosTerminal.lerHorario("Horário final: ");
    this.#consultasController.cadastrarAgendamento(cpf, data, horaInicial, horaFinal);
  }

  async #listarConsultas() {
    const consultas = this.#consultasController.listarAgendamentos();
    consultas.forEach(consulta => {
      console.log(consulta.cpf, consulta.data, consulta.horaInicial, consulta.horaFinal);
    })
  }

  async #cancelarAgendamento() {
    const cpf = await LeitorDadosTerminal.lerCpf();
    const data = await LeitorDadosTerminal.lerData();
    const hora = await LeitorDadosTerminal.lerHorario();
    this.#consultasController.removerAgendamento(cpf, data, hora);
  }
}
