export class Aluno {
  #nome;
  #matricula;
  #p1;
  #p2;

  constructor(nome, matricula) {
    this.#nome = nome;
    this.#matricula = matricula;
  }

  get nome() {
    return this.#nome;
  }

  get matricula() {
    return this.#matricula;
  }

  get p1() {
    return this.#p1;
  }

  get p2() {
    return this.#p2;
  }

  primeiraNota(nota) {
    this.#p1 = nota;
  }

  segundaNota(nota) {
    this.#p2 = nota;
  }
}

export class Turma {
  #alunos = [];

  inserirAluno(aluno) {
    if (this.#alunos.filter(a => a.matricula === aluno.matricula).length === 0) {
      this.#alunos.push(aluno);
    }
  }

  removerAluno(matricula) {
    this.#alunos = this.#alunos.filter(a => a.matricula !== matricula);
  }

  lancarNota(matricula, prova, nota) {
    const aluno = this.#alunos.find(aluno => aluno.matricula === matricula);
    const indice = this.#alunos.indexOf(aluno);
    if (prova === "p1") aluno.primeiraNota(nota);
    else aluno.segundaNota(nota);
    this.#alunos.splice(indice, 1, aluno);
  }

  imprimir() {
    console.log("--------------------------------------------");
    console.log("Matrícula Nome                  P1   P2   NF");
    console.log("--------------------------------------------");
    for (const aluno of this.#alunos) {
      let linha = "matricula nome p1 p2 nf";
      linha = linha.replace("matricula", aluno.matricula.padStart(7, " ").padEnd(9, " "));
      linha = linha.replace("nome", aluno.nome.slice(0, 19).padEnd(19, " "));
      linha = linha.replace("p1", aluno.p1.toFixed(1).padStart(4, " ") || "   -");
      linha = linha.replace("p2", aluno.p2.toFixed(1).padStart(4, " ") || "   -");
      const notaFinal = ((parseFloat(aluno.p1) + parseFloat(aluno.p2)) / 2.0).toFixed(1).padStart(4, " ") || "   -";
      linha = linha.replace("nf", notaFinal);
      console.log(linha);
    }
    console.log("--------------------------------------------");
  }
}
