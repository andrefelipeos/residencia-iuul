import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/* Nome */
let nome = await rl.question("Nome: ");
while (nome.length < 5) {
  console.log("O nome deve ter pelo menos cinco caracteres.");
  nome = await rl.question("Nome: ");
}

/* CPF */
let cpf = await rl.question("CPF: ");
while (!cpfValido(cpf)) {
  console.log("O CPF deve ter exatamente onze dígitos.");
  cpf = await rl.question("CPF: ");
}

/* Data de Nascimento */
let dataDeNascimento = await rl.question("Data de Nascimento: ");
while (!formatoValido(dataDeNascimento) || !maiorDeIdade(dataDeNascimento)) {
  if (!formatoValido(dataDeNascimento)) {
    console.log("A data deve estar no formato DD/MM/AAAA.");
  } else {
    console.log("A data deve ser pelo menos 18 anos atrás.");
  }
  dataDeNascimento = await rl.question("Data de Nascimento: ");
}

/* Renda Mensal */
let rendaMensal = await rl.question("Renda Mensal: ");
while (!/^[0-9]+,[0-9]{2}$/.test(rendaMensal)) {
  console.log("Insira um valor númerico com duas casas decimais após a vírgula.");
  rendaMensal = await rl.question("Renda Mensal: ");
}

/* Estado Civil */
let estadoCivil = await rl.question("Estado Civil: ");
while (!/^(c|s|v|d)$/.test(estadoCivil.toLowerCase())) {
  console.log("O estado civil deve estar entre as seguintes letras, em maiúsculo ou minúsculo: C, S, V e D.");
  estadoCivil = await rl.question("Estado Civil: ");
}

/* Dependentes */
let dependentes = await rl.question("Dependentes: ");
while (dependentes < 0 || dependentes > 10) {
  console.log("O número de dependentes deve estar entre 0 e 10.");
  dependentes = await rl.question("Dependentes: ");
}

rl.close();

console.log("Nome: " + nome);
console.log("CPF: " + mascaraCpf(cpf));
console.log("Data: " + dataDeNascimento);
console.log("Renda: " + rendaMensal);
console.log("Estado Civil: " + estadoCivil.toUpperCase());
console.log("Dependentes: " + dependentes);

function formatoValido(data) {
  if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(data)) {
    return false;
  }
  return true;
}

function maiorDeIdade(dataStr) {
  let [dia, mes, ano] = dataStr.split('/');
  let data = new Date(ano, mes, dia);
  return calculaIdade(data) >= 18;
}

function calculaIdade(data) {
  const hoje = new Date()
  let idade = hoje.getFullYear() - data.getFullYear();
  if (
    hoje.getMonth() < data.getMonth()
    || (hoje.getMonth() === data.getMonth() && hoje.getDate() < data.getDate())
  ) {
    return idade - 1;
  }
  return idade;
}

function mascaraCpf(cpf) {
  if (!cpfValido(cpf)) {
    throw "O CPF deve ser formado por exatamente onze dígitos."
  }
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

function cpfValido(cpf) {
  return /^[0-9]{11}$/.test(cpf);
}
