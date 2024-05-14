import { BancoDeDados } from "../../BancoDeDados.js";
import { Paciente } from "../model/Paciente.js";

export class PacientesRepository {
  cadastrar(paciente: Paciente): void{
    BancoDeDados.pacientes.push(paciente);
  }

  excluir(cpf: string): void {
    BancoDeDados.pacientes = BancoDeDados.pacientes.filter(paciente => paciente.cpf != cpf);
  }

  existePacienteCadastradoComCpf(cpf: string): boolean {
    return BancoDeDados.pacientes.some(paciente => paciente.cpf === cpf);
  }

  recuperarTodos(): Array<Paciente> {
    return BancoDeDados.pacientes;
  }
}

