import { ConversionData } from "src/model/ConversionData";

import { InputReader } from "src/util/InputReader";

export class ConversionView {
  constructor(private readonly inputReader: InputReader) {}

  getUserInput(): ConversionData {
    let userInput: ConversionData;
    userInput.initialCurrency = this.inputReader.getString();
    userInput.targetCurrency = this.inputReader.getString();
    userInput.amount = this.inputReader.getNumber();
    return userInput;
  }

  showConversion(conversionData) {
    console.log(conversionData.initialCurrency, conversionData.amount, "=>",
      conversionData.targetCurrency, conversionData.convertedValue);
    console.log("Taxa:", conversionData.conversionRate);
  }
}

