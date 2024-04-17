import { ConversionData } from "../model/ConversionData";
import { FulfilledConversionData } from "../model/FulfilledConversionData";
import { InputReader } from "../util/InputReader";

export class ConversionView {
  constructor(private readonly inputReader: InputReader) {}

  public async askIfUserWantsToContinue(): Promise<boolean> {
    const promptMessage: string = "Digite '1' para fazer uma nova conversão."
      + "\nQualquer outra coisa encerrará o programa.\n> ";
    const input: string = await this.inputReader.getString(promptMessage);
    if (input === "1") return true;
    else return false;
  }

  public async getUserInput(): Promise<ConversionData> {
    const initialCurrency = await this.inputReader.getString("Moeda origem: ");
    const targetCurrency = await this.inputReader.getString("Moeda destino: ");
    const amount = await this.inputReader.getNumber("Valor: ");
    return { initialCurrency, targetCurrency, amount };
  }

  public presentConversionResult(conversionResult: FulfilledConversionData) {
    console.log(conversionResult.initialCurrency, conversionResult.amount, "=>",
      conversionResult.targetCurrency, conversionResult.conversionResult);
    console.log("Taxa:", conversionResult.conversionRate);
  }
}

