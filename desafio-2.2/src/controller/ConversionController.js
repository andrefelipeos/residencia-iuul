export class ConversionController {
  run() {
    do {
      const conversionData = this.#conversionView.getUserInput();
      const result = this.#conversionService.convert(data);
      this.#conversionView.presentConversionResult(result);
      if (!this.convertionView.userWantsToContinue) break;
    } while (true);
  }
}

