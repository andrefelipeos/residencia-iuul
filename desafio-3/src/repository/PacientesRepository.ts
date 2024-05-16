import { BancoDeDados } from "../../BancoDeDados.js";
import { Paciente } from "../model/Paciente.js";

export class PacientesRepository {
  async cadastrar(paciente: Paciente): Promise<Paciente> {
    return paciente.save();
  }

  excluir(cpf: string): void {
    Paciente.destroy({
      where: {
        cpf: cpf,
      },
    });
  }

  async existePacienteCadastradoComCpf(cpf: string): Promise<boolean> {
    return await Paciente.findOne({
      where: {
        cpf: cpf,
      },
    }) != null;
  }

  async recuperarTodos(): Promise<Array<Paciente>> {
    return await Paciente.findAll();
  }
}

