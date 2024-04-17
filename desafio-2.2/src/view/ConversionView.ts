import { ConversionData } from "src/model/ConversionData";
import { FulfilledConversionData } from "src/model/FulfilledConversionData";
import { InputReader } from "src/util/InputReader";

export class ConversionView {
  constructor(private readonly inputReader: InputReader) {}

  public async askIfUserWantsToContinue(): Promise<boolean> {
    const promptMessage: string = `1 - SAIR   2 - CONTINUAR`;
    const input: string = await this.inputReader.getString(promptMessage);
    if (input === "SAIR") return false;
    else return true;
  }

  public async getUserInput(): Promise<ConversionData> {
    let userInput: ConversionData;
    userInput.initialCurrency = await this.inputReader.getString();
    userInput.targetCurrency = await this.inputReader.getString();
    userInput.amount = await this.inputReader.getNumber();
    return userInput;
  }

  public presetConversionResult(conversionResult: FulfilledConversionData) {
    console.log(conversionResult.initialCurrency, conversionResult.amount, "=>",
      conversionResult.targetCurrency, conversionResult.conversionResult);
    console.log("Taxa:", conversionResult.conversionRate);
  }
}

