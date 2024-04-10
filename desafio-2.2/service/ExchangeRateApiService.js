export class ExchangeRateApiService {
  API_KEY = process.env.EXCHANGE_RATE_API_KEY;
  API_URL = `https://v6.exchangerate-api.com/v6/${this.API_KEY}/pair`;

  async convert(amount, currentCurrency, conversionCurrency) {
    return await fetch(`${this.API_URL}/${currentCurrency}/${conversionCurrency}/${amount}`)
      .then(response => response.json());
  }
}

