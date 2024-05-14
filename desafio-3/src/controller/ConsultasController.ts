import { Consulta } from "../model/Consulta.js";
import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { ConsultasService } from "../service/ConsultasService.js";

export class ConsultasController {
  private consultasRepository: ConsultasRepository = new ConsultasRepository();
  private consultasService: ConsultasService = new ConsultasService();

  cadastrarAgendamento(cpfDoPaciente: string, dataStr: string, horaInicial: string, horaFinal: string): void {
    const data = new Date(dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "\$2\/\$1\/\$3"));
    this.consultasService.agendarConsulta(cpfDoPaciente, data, horaInicial, horaFinal);
  }

  removerAgendamento(cpfDoPaciente: string, data: string, horaInicial: string): void {
    this.consultasRepository.cancelar(cpfDoPaciente, new Date(data), horaInicial);
  }

  listarAgendamentos(): Array<Consulta> {
    return this.consultasRepository.recuperarTodas();
  }
}

