import { Consulta } from "../model/Consulta.js";
import { ConsultasRepository } from "../repository/ConsultasRepository.js";
import { PacientesRepository } from "../repository/PacientesRepository.js";

export class ConsultasService {
  private consultasRepository: ConsultasRepository = new ConsultasRepository();
  private pacientesRepository: PacientesRepository = new PacientesRepository();

  agendarConsulta(cpfDoPaciente: string, data: Date, horaInicial: string, horaFinal: string): boolean {
    if (!this.pacientesRepository.existePacienteCadastradoComCpf(cpfDoPaciente)) {
      console.log("Não existe um paciente cadastrado com o CPF informado.");
      return false;
    }
    if (this.consultasRepository.existeConsultaFuturaAgendadaParaPaciente(cpfDoPaciente)) {
      console.log("O paciente já possui um agendamento futuro – não é possível agendar outra consulta.");
      return false;
    }
    const consulta = new Consulta(cpfDoPaciente, data, horaInicial, horaFinal);
    this.consultasRepository.cadastrar(consulta);
    return true;
  }
}

