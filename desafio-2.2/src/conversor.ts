import { ConversionController } from "./controller/ConversionController";
import { ConversionView } from "./view/ConversionView";
import { ExchangeRateApiService } from "./service/ExchangeRateApiService";
import { InputReader } from "./util/InputReader";
import { TerminalInputReader } from "./util/TerminalInputReader";

const inputReader: InputReader = new TerminalInputReader();
const conversionView: ConversionView = new ConversionView(inputReader);
const exchangeRateApiService: ExchangeRateApiService = new ExchangeRateApiService();
const conversionController: ConversionController = new ConversionController(exchangeRateApiService, conversionView);

conversionController.run().then(() => inputReader.closeResources());

