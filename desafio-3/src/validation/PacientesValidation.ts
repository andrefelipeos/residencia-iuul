export class PacientesValidation {
  static cpfValido(cpf: string): boolean {
    if (!this.formatoCpfValido(cpf)) {
      throw "CPF inválido – um CPF válido é formado por onze dígitos.";
    }

    const numerosCpf: Array<number> = cpf.split("").map(caractere => parseInt(caractere));

    const acumuladorDeJ: number = numerosCpf.slice(0, -2).map((n, i) => n * (10 - i))
      .reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const J: number = acumuladorDeJ % 11 <= 1 ? 0 : 11 - (acumuladorDeJ % 11);
    if (J !== numerosCpf[9]) return false;

    const acumuladorDeK: number = numerosCpf.slice(0, -1).map((n, i) => n * (11 - i))
      .reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const K: number = acumuladorDeK % 11 <= 1 ? 0 : 11 - (acumuladorDeK % 11);
    if (K !== numerosCpf[10]) return false;

    return true;
  }

  static formatoCpfValido(cpf: string): boolean {
    return /^[0-9]{11}$/.test(cpf);
  }

  static tamanhoDoNomeValido(nome: string): boolean {
    return nome.length >= 5;
  }

  static formatoDataValido(data: string): boolean {
    return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data);
  }

  static dataValida(dataStr: string): boolean {
    if (!this.formatoDataValido(dataStr)) {
      throw "Data inválida - datas devem estar no formato DD/MM/AAAA.";
    }
    dataStr = dataStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g,"\$2\/\$1\/\$3");
    if (isNaN((new Date(dataStr)).getTime())) return false;
    else return true;
  }
}

