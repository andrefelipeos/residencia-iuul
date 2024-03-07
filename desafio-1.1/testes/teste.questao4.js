import { Aluno, Turma } from "../questao4";

const aluno1 = new Aluno("Lucas", "12000");
const aluno2 = new Aluno("Jorge", "12001");
const aluno3 = new Aluno("Maria", "12002");
const aluno4 = new Aluno("Sofia", "12003");

let turma = new Turma();
turma.inserirAluno(aluno1);
turma.inserirAluno(aluno2);
turma.inserirAluno(aluno3);
turma.inserirAluno(aluno4);
turma.lancarNota(aluno1.matricula, "p1", 8.0);
turma.lancarNota(aluno1.matricula, "p2", 7.7);
turma.lancarNota(aluno2.matricula, "p1", 8.5);
turma.lancarNota(aluno2.matricula, "p2", 10.0);
turma.lancarNota(aluno3.matricula, "p1", 10.0);
turma.lancarNota(aluno3.matricula, "p2", 9.0);
turma.lancarNota(aluno4.matricula, "p1", 8.5);
turma.lancarNota(aluno4.matricula, "p2", 9.5);
turma.imprimir();
