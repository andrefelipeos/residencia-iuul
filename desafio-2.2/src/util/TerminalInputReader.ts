import * as readline from "node:readline/promises";

import { InputReader } from "src/util/InputReader";

export class TerminalInputReader implements InputReader {
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  public async getNumber(message: string = "Number:"): Promise<number> {
    return await this.rl.question(message).then(input => parseFloat(input));
  }

  public async getString(message: string = "String:"): Promise<string> {
    return await this.rl.question(message);
  }
}

