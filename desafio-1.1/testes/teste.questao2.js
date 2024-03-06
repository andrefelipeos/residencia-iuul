import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { Vertice } from '../questao1.js';
import { Triangulo } from '../questao2.js';

const rl = readline.createInterface({ input, output });
console.log("Criando dois triângulos...");
let x, y;
let v1, v2, v3;
let t1, t2;

console.log("Definindo o primeiro triângulo...");
x = await rl.question("Qual o valor x do primeiro vértice? ");
y = await rl.question("Qual o valor y do primeiro vértice? ");
v1 = new Vertice(x, y);
x = await rl.question("Qual o valor x do segundo vértice? ");
y = await rl.question("Qual o valor y do segundo vértice? ");
v2 = new Vertice(x, y);
x = await rl.question("Qual o valor x do terceiro vértice? ");
y = await rl.question("Qual o valor y do terceiro vértice? ");
v3 = new Vertice(x, y);
t1 = new Triangulo(v1, v2, v3);
console.log("Primeiro triângulo criado...");

console.log("Definindo o segundo triângulo...");
x = await rl.question("Qual o valor x do primeiro vértice? ");
y = await rl.question("Qual o valor y do primeiro vértice? ");
v1 = new Vertice(x, y);
x = await rl.question("Qual o valor x do segundo vértice? ");
y = await rl.question("Qual o valor y do segundo vértice? ");
v2 = new Vertice(x, y);
x = await rl.question("Qual o valor x do terceiro vértice? ");
y = await rl.question("Qual o valor y do terceiro vértice? ");
v3 = new Vertice(x, y);
t2 = new Triangulo(v1, v2, v3);
console.log("Segundo triângulo criado...");

console.log("O triângulo t1 xé igual ao triângulo t2.".replace("x", t1.equals(t2) ? "" : "não "));
console.log("O perimetro do triângulo t1 é " + t1.perimetro);
console.log("O perimetro do triângulo t2 é " + t2.perimetro);
console.log("O triângulo t1 é um triângulo " + t1.tipo());
console.log("O triângulo t2 é um triângulo " + t2.tipo());
console.log("A área do triângulo t1 é " + t1.area());
console.log("A área do triângulo t2 é " + t2.area());

console.log("Clonando t1 como t3...");
let t3 = t1.clone();
console.log("Clonando t2 como t4...");
let t4 = t2.clone();

console.log("O triângulo t3 xé igual ao triângulo t1.".replace("x", t3.equals(t1) ? "" : "não "));
console.log("O triângulo t3 xé igual ao triângulo t2.".replace("x", t3.equals(t2) ? "" : "não "));
console.log("O triângulo t4 xé igual ao triângulo t1.".replace("x", t4.equals(t1) ? "" : "não "));
console.log("O triângulo t4 xé igual ao triângulo t2.".replace("x", t4.equals(t2) ? "" : "não "));

rl.close();
