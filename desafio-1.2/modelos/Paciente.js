export class Paciente {
  #nome;
  #cpf;
  #dataDeNascimento;

  constructor(nome, cpf, data) {
    this.#nome = nome;
    this.#cpf = cpf;
    this.#dataDeNascimento = data;
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get dataDeNascimento() {
    return this.#dataDeNascimento;
  }
}