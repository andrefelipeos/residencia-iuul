import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { Vertice } from '../questao1.js';

const rl = readline.createInterface({ input, output });

let x, y;
x = await rl.question("Ordenada x do vértice 1: ");
y = await rl.question("Ordenada y do vértice 1: ");
let vertice1 = new Vertice(x, y);

x = await rl.question("Ordenada x do vértice 2: ");
y = await rl.question("Ordenada y do vértice 2: ");
let vertice2 = new Vertice(x, y);

x = await rl.question("Ordenada x do vértice 3: ");
y = await rl.question("Ordenada y do vértice 3: ");
let vertice3 = new Vertice(x, y);

// distância, mover e equals
console.log(`A distância entre os vértices 1 e 2 é ${vertice1.distancia(vertice2)}`);
console.log(`A distância entre os vértices 1 e 3 é ${vertice1.distancia(vertice3)}`);
console.log(`A distância entre os vértices 2 e 3 é ${vertice2.distancia(vertice3)}`);
console.log(`A distância entre os vértices 3 e 2 é ${vertice3.distancia(vertice2)}`);

console.log(`O vértice 1 xé igual ao vértice 2.`.replace("x", vertice1.equals(vertice2) ? "" : "não "));
console.log(`O vértice 2 xé igual ao vértice 3.`.replace("x", vertice2.equals(vertice3) ? "" : "não "));
console.log(`O vértice 3 xé igual ao vértice 2.`.replace("x", vertice3.equals(vertice2) ? "" : "não "));
console.log(`O vértice 1 xé igual ao vértice 1.`.replace("x", vertice1.equals(vertice1) ? "" : "não "));

vertice3.mover(2.0, 2.5);
console.log(`A distância entre os vértices 1 e 2 é ${vertice1.distancia(vertice2)}`);
console.log(`A distância entre os vértices 1 e 3 é ${vertice1.distancia(vertice3)}`);
console.log(`A distância entre os vértices 2 e 3 é ${vertice2.distancia(vertice3)}`);
console.log(`A distância entre os vértices 3 e 2 é ${vertice3.distancia(vertice2)}`);

vertice2.mover(2.0, 2.5);
console.log(`A distância entre os vértices 1 e 2 é ${vertice1.distancia(vertice2)}`);
console.log(`A distância entre os vértices 1 e 3 é ${vertice1.distancia(vertice3)}`);
console.log(`A distância entre os vértices 2 e 3 é ${vertice2.distancia(vertice3)}`);
console.log(`A distância entre os vértices 3 e 2 é ${vertice3.distancia(vertice2)}`);

console.log(`O vértice 1 xé igual ao vértice 2.`.replace("x", vertice1.equals(vertice2) ? "" : "não "));
console.log(`O vértice 2 xé igual ao vértice 3.`.replace("x", vertice2.equals(vertice3) ? "" : "não "));
console.log(`O vértice 3 xé igual ao vértice 2.`.replace("x", vertice3.equals(vertice2) ? "" : "não "));
console.log(`O vértice 1 xé igual ao vértice 1.`.replace("x", vertice1.equals(vertice1) ? "" : "não "));

rl.close();
