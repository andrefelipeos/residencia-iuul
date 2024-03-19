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

  recuperarTodas() {
    return BancoDeDados.consultas;
  }
}
