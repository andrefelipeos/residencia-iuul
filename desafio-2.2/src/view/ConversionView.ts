import { ConversionData } from "../model/ConversionData";
import { FulfilledConversionData } from "../model/FulfilledConversionData";
import { InputReader } from "../util/InputReader";

export class ConversionView {
  constructor(private readonly inputReader: InputReader) {}

  public async askIfUserWantsToContinue(): Promise<boolean> {
    const promptMessage: string = `1 - SAIR   2 - CONTINUAR`;
    const input: string = await this.inputReader.getString(promptMessage);
    if (input === "SAIR") return false;
    else return true;
  }

  public async getUserInput(): Promise<ConversionData> {
    const initialCurrency = await this.inputReader.getString();
    const targetCurrency = await this.inputReader.getString();
    const amount = await this.inputReader.getNumber();
    return { initialCurrency, targetCurrency, amount };
  }

  public presentConversionResult(conversionResult: FulfilledConversionData) {
    console.log(conversionResult.initialCurrency, conversionResult.amount, "=>",
      conversionResult.targetCurrency, conversionResult.conversionResult);
    console.log("Taxa:", conversionResult.conversionRate);
  }
}

