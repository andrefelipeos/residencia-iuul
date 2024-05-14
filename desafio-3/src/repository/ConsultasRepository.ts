import { BancoDeDados } from "../../BancoDeDados.js";
import { Consulta } from "../model/Consulta.js";
import { Paciente } from "../model/Paciente.js";

export class ConsultasRepository {
  cadastrar(consulta: Consulta): void {
    BancoDeDados.consultas.push(consulta);
  }

  cancelar(cpf: string, data: Date, hora: string): void {
    BancoDeDados.consultas = BancoDeDados.consultas.filter(consulta => {
      return consulta.cpfDoPaciente !== cpf || consulta.data !== data || consulta.horaInicial !== hora;
    });
  }

  excluirConsultasPassadasDeUmPaciente(cpf: string): void {
    BancoDeDados.consultas = BancoDeDados.consultas.filter(consulta => {
      return consulta.cpfDoPaciente !== cpf || consulta.data.getTime() >= Date.now();
    });
  }

  existeConsultaFuturaAgendadaParaPaciente(cpf: string): boolean {
    return BancoDeDados.consultas.some(consulta => {
      return consulta.cpfDoPaciente === cpf && consulta.data.getTime() >= Date.now();
    });
  }

  recuperarTodas(): Array<Consulta> {
    return BancoDeDados.consultas;
  }
}

