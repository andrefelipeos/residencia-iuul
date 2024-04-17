import { ConversionData } from "../model/ConversionData";
import { ConversionView } from "../view/ConversionView";
import { ExchangeRateApiService } from "../service/ExchangeRateApiService";
import { FulfilledConversionData } from "../model/FulfilledConversionData";

export class ConversionController {
  constructor(
    private readonly conversionService: ExchangeRateApiService,
    private readonly conversionView: ConversionView
  ) {};

  public async run(): Promise<void> {
    let userWantsToContinue: boolean;
    do {
      const conversionData: ConversionData = await this.conversionView.getUserInput();
      const fulfilledConversionData: FulfilledConversionData = await this.conversionService.convert(conversionData);
      this.conversionView.presentConversionResult(fulfilledConversionData);
      userWantsToContinue = await this.conversionView.askIfUserWantsToContinue();
    } while (userWantsToContinue);
  }
}

