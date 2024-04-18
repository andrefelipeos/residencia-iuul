import { ConversionData } from "../model/ConversionData";
import { FulfilledConversionData } from "../model/FulfilledConversionData";
import { InputReader } from "../util/InputReader";

export class ConversionView {
  constructor(private readonly inputReader: InputReader) {}

  public async askIfUserWantsToContinue(): Promise<boolean> {
    const promptMessage: string = "Digite '1' para fazer uma nova conversão."
      + "\nQualquer outra coisa encerrará o programa.\n> ";
    const input: string = await this.inputReader.getString(promptMessage);
    if (input === "1") {
      return true;
    } else {
      return false;
    }
  }

  private async getAmountValue(promptMessage: string): Promise<number> {
    let amountValue: number = await this.inputReader.getNumber(promptMessage);
    while (amountValue <= 0) {
      console.log("O valor a ser convertido deve ser maior que zero!");
      amountValue = await this.inputReader.getNumber(promptMessage);
    }
    return amountValue;
  }

  private async getCurrencyCode(promptMessage: string): Promise<string> {
    let currencyCode: string = await this.inputReader.getString(promptMessage);
    while (currencyCode.length !== 3) {
      console.log("O código de moeda deve conter exatamente três letras!");
      currencyCode = await this.inputReader.getString(promptMessage);
    }
    return currencyCode;
  }

  public async getUserInput(): Promise<ConversionData> {
    const initialCurrency: string = await this.getCurrencyCode("Moeda origem: ");
    let targetCurrency: string = await this.getCurrencyCode("Moeda destino: ");
    while (targetCurrency === initialCurrency) {
      console.log("A moeda destino deve ser diferente da moeda inicial!");
      targetCurrency = await this.getCurrencyCode("Moeda destino: ");
    }
    const amount: number = await this.getAmountValue("Valor: ");
    return { initialCurrency, targetCurrency, amount };
  }

  public presentConversionResult(conversionResult: FulfilledConversionData) {
    console.log(conversionResult.initialCurrency, conversionResult.amount.toFixed(2), "=>",
      conversionResult.targetCurrency, conversionResult.conversionResult.toFixed(2));
    console.log("Taxa:", conversionResult.conversionRate.toFixed(6));
  }
}

