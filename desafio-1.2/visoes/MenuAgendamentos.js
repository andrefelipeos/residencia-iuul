import { ControladorDeAgendamento } from "../controladores/ControladorDeAgendamento.js";

export class MenuAgendamentos {
  #rl;
  #agendamentoController = new ControladorDeAgendamento();

  constructor(readliner) {
    this.#rl = readliner;
  }

  async executar() {
    this.#listarOpcoes();
    let escolha = await this.#rl.question("O que você deseja fazer? ");
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
    const cpf = await this.#rl.question("Qual o CPF do paciente? ");
    const data = await this.#rl.question("Qual a data da consulta? ");
    const horaInicial = await this.#rl.question("Que horas começa a consulta? ");
    const horaFinal = await this.#rl.question("Que horas termina a consulta? ");
    this.#agendamentoController.cadastrarAgendamento(cpf, data, horaInicial, horaFinal);
  }

  async #listarConsultas() {
    const consultas = this.#agendamentoController.listarAgendamentos();
    consultas.forEach(consulta => {
      console.log(consulta.cpf, consulta.data, consulta.horaInicial, consulta.horaFinal);
    })
  }

  async #cancelarAgendamento() {
    const cpf = await this.#rl.question("Qual o CPF do paciente? ");
    const data = await this.#rl.question("Qual a data da consulta? ");
    const hora = await this.#rl.question("Qual o horário da consulta? ");
    this.#agendamentoController.removerAgendamento(cpf, data, hora);
  }
}
