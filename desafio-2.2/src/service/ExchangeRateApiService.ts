import "dotenv/config";

import { ConversionData } from "../model/ConversionData";

export class ExchangeRateApiService {
  API_KEY = process.env.EXCHANGE_RATE_API_KEY;
  API_URL = `https://v6.exchangerate-api.com/v6/${this.API_KEY}/pair`;

  async convert(conversionData: ConversionData) {
    return await fetch(`${this.API_URL}/${conversionData.initialCurrency}/${conversionData.targetCurrency}/${conversionData.amount}`)
      .then(response => response.json());
  }
}

