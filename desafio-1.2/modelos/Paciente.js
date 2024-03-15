export class Paciente {
  #nome;
  #cpf;
  #dataNascimento;

  constructor() {
    this.#nome = nome;
    this.#cpf = cpf;
    this.#dataNascimento = data;
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }
}