import { Consulta } from "../model/Consulta.js";
import { ConsultasController } from "../controller/ConsultasController.js";
import { LeitorDadosTerminal } from "../utils/LeitorDadosTerminal.js";

export class MenuConsultas {
  private consultasController: ConsultasController = new ConsultasController();

  async executar(): Promise<void> {
    this.listarOpcoes();
    let escolha: string = await LeitorDadosTerminal.lerOpcaoDeMenu();
    if (escolha === "1") await this.agendarConsulta();
    if (escolha === "2") await this.listarConsultas();
    if (escolha === "3") await this.cancelarAgendamento();
  }

  private listarOpcoes(): void {
    console.log("Menu de Agendamentos");
    console.log("1–Agendar consulta");
    console.log("2–Listar consultas");
    console.log("3–Cancelar agendamento");
  }

  private async agendarConsulta(): Promise<void> {
    const cpf: string= await LeitorDadosTerminal.lerCpf();
    const data: string = await LeitorDadosTerminal.lerData();
    const horaInicial: string = await LeitorDadosTerminal.lerHorario("Horário inicial: ");
    const horaFinal: string  = await LeitorDadosTerminal.lerHorario("Horário final: ");
    this.consultasController.cadastrarAgendamento(cpf, data, horaInicial, horaFinal);
  }

  private async listarConsultas(): Promise<void> {
    const consultas: Array<Consulta> = this.consultasController.listarAgendamentos();
    consultas.forEach(consulta => {
      console.log(consulta.cpfDoPaciente, consulta.data, consulta.horaInicial, consulta.horaFinal);
    })
  }

  private async cancelarAgendamento(): Promise<void> {
    const cpf: string = await LeitorDadosTerminal.lerCpf();
    const data: string = await LeitorDadosTerminal.lerData();
    const hora: string = await LeitorDadosTerminal.lerHorario();
    this.consultasController.removerAgendamento(cpf, data, hora);
  }
}
