import { BancoDeDados } from "../BancoDeDados.js";

export class ConsultasRepository {
  cadastrar(consulta) {
    BancoDeDados.consultas.push(consulta);
  }

  cancelar(cpf, data, hora) {
    //BancoDeDados.consultas...;
  }

  recuperarTodas() {
    return BancoDeDados.consultas;
  }
}
