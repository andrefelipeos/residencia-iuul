import { BancoDeDados } from "../BancoDeDados.js";

export class ConsultasRepository {
  cadastrar(consulta) {
    BancoDeDados.consultas.push(consulta);
  }

  cancelar(cpf, data, hora) {
    BancoDeDados.consultas = BancoDeDados.consultas.filter(consulta => {
      consulta.cpf !== cpf || consulta.data !== data || consulta.horaInicial !== hora;
    });
  }

  excluirConsultasPassadasDeUmPaciente(cpf) {
    BancoDeDados.consultas = BancoDeDados.consultas.filter(consulta => {
      return consulta.cpf !== cpf || consulta.data.getTime() >= Date.now().getTime();
    });
  }

  existeConsultaFuturaAgendadaParaPaciente(cpf) {
    return BancoDeDados.consultas.some(consulta => {
      return consulta.cpf === cpf && consulta.data.getTime() >= Date.now().getTime();
    });
  }

  recuperarTodas() {
    return BancoDeDados.consultas;
  }
}
