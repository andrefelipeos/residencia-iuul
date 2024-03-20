export class PacientesValidation {
  static cpfValido(cpf) {
    if (!this.formatoCpfValido(cpf)) {
      throw "CPF inválido – um CPF válido é formado por onze dígitos.";
    }

    const numerosCpf = cpf.split("").map(caractere => parseInt(caractere));

    const acumuladorDeJ = numerosCpf.slice(0, -2).map((n, i) => n * (10 - i))
      .reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const J = acumuladorDeJ % 11 <= 1 ? 0 : 11 - (acumuladorDeJ % 11);
    if (J !== numerosCpf[9]) return false;

    const acumuladorDeK = numerosCpf.slice(0, -1).map((n, i) => n * (11 - i))
      .reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const K = acumuladorDeK % 11 <= 1 ? 0 : 11 - (acumuladorDeK % 11);
    if (K !== numerosCpf[10]) return false;

    return true;
  }

  static formatoCpfValido(cpf) {
    return /^[0-9]{11}$/.test(cpf);
  }

  static tamanhoDoNomeValido(nome) {
    return nome.length >= 5;
  }

  static validarDataDeNascimento(data) {
    return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
  }
}