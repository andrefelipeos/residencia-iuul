import { BancoDeDados } from "../../BancoDeDados.js";
import { Paciente } from "../model/Paciente.js";

export class PacientesRepository {
  async cadastrar(paciente: Paciente): Promise<Paciente> {
    return paciente.save();
  }

  excluir(cpf: string): void {
    BancoDeDados.pacientes = BancoDeDados.pacientes.filter(paciente => paciente.cpf != cpf);
  }

  existePacienteCadastradoComCpf(cpf: string): boolean {
    return BancoDeDados.pacientes.some(paciente => paciente.cpf === cpf);
  }

  async recuperarTodos(): Promise<Array<Paciente>> {
    return await Paciente.findAll();
  }
}

