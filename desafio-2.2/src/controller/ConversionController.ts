import { ConversionData } from "src/model/ConversionData";
import { ConversionView } from "src/view/ConversionView";
import { ExchangeRateApiService } from "src/service/ExchangeRateApiService";
import { FulfilledConversionData } from "src/model/FulfilledConversionData";

export class ConversionController {
  constructor(
    private readonly conversionService: ExchangeRateApiService,
    private readonly conversionView: ConversionView
  ) {};

  public async run() {
    let userWantsToContinue: boolean;
    do {
      const conversionData: ConversionData = await this.conversionView.getUserInput();
      const fulfilledConversionData: FulfilledConversionData = await this.conversionService.convert(conversionData);
      this.conversionView.presentConversionResult(fulfilledConversionData);
      userWantsToContinue = await this.conversionView.askIfUserWantsToContinue();
    } while (userWantsToContinue);
  }
}

