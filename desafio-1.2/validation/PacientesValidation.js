export class PacientesValidation {
  static validarCpf(cpf) {
    return /^[0-9]{11}$/.test(cpf);
  }

  static tamanhoDoNomeValido(nome) {
    return nome.length >= 5;
  }

  static validarDataDeNascimento(data) {
    return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
  }
}