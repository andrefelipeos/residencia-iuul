import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let nome = await rl.question("Nome: ");
while (nome.length < 5) {
  console.log("O nome deve ter pelo menos cinco caracteres.");
  nome = await rl.question("Nome: ");
}
let cpf = await rl.question("CPF: ");
while (/^[0-9]{11}$/.test(cpf)) {
  console.log("O CPF deve ter exatamente onze dígitos.");
  nome = await rl.question("CPF: ");
}
let dataDeNascimento = await rl.question("Data de nascimento: ");
while (!dataValida(dataDeNascimento) || !maiorDeIdade(dataDeNascimento)) {
  if (!dataValida(dataDeNascimento)) {
    console.log("A data deve estar no formato DD/MM/AAAA.");
  } else {
    console.log("A data deve ser pelo menos 18 anos atrás.");
  }
  dataDeNascimento = await rl.question("Data de nascimento: ");
}
let rendaMensal = await rl.question("Renda Mensal: ");
let estadoCivil = await rl.question("Estado Civil: ");
while (!['C', 'S', 'V', 'D'].includes(estadoCivil.toLowerCase)) {
  console.log("O estado civil deve estar entre as seguintes letras, em maiúsculo ou minúsculo: C, S, V e D.");
  estadoCivil = await rl.question("Estado Civil: ");
}
let dependentes = await rl.question("Dependentes: ");
while (dependentes < 0 || dependentes > 10) {
  console.log("O número de dependentes deve estar entre 0 e 10.");
  dependentes = await rl.question("Dependentes: ");
}

rl.close();

console.log("Nome: " + nome);
console.log("CPF: " + cpf);
console.log("Data: " + dataDeNascimento);
console.log("Renda: " + rendaMensal);
console.log("Estado Civil: " + estadoCivil);
console.log("Dependentes: " + dependentes);

function dataValida(data) {
  if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data)) {
    return false;
  }
  let dia, mes, ano = data.split('/');
  if (dia > 31 || mes > 12 || ano > 2024) {
    return false;
  }
  return true;
}
