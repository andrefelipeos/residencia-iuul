import "dotenv/config";

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { ExchangeRateApiService } from "./service/ExchangeRateApiService.js";

const rl = readline.createInterface({ input, output });

const apiService = new ExchangeRateApiService();
const curr = await rl.question("Moeda de origem: ");
const conv = await rl.question("Moeda de destino: ");
const amount = await rl.question("Valor: ");
let response = await apiService.convert(amount, curr, conv);
console.log(response.conversion_result);

rl.close();

