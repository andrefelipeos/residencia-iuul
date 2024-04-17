import "dotenv/config";

import { ConversionData } from "../model/ConversionData";
import { FulfilledConversionData } from "../model/FulfilledConversionData";

export class ExchangeRateApiService {
  private API_KEY: string = process.env.EXCHANGE_RATE_API_KEY;
  private API_URL: string = `https://v6.exchangerate-api.com/v6/${this.API_KEY}/pair`;

  public async convert(requestData: ConversionData): Promise<FulfilledConversionData> {
    return fetch(`${this.API_URL}/${requestData.initialCurrency}/${requestData.targetCurrency}/${requestData.amount}`)
      .then(response => response.json())
      .then(json => {
        return {
          initialCurrency: json.base_code,
          targetCurrency: json.target_code,
          amount: requestData.amount,
          conversionRate: json.conversion_rate,
          conversionResult: json.conversion_result
        } as FulfilledConversionData;
      });
  }
}

