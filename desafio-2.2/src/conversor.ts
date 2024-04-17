import { ConversionController } from "src/controller/ConversionController";
import { ConversionView } from "src/view/ConversionView";
import { ExchangeRateApiService } from "src/service/ExchangeRateApiService";
import { InputReader } from "src/util/InputReader";
import { TerminalInputReader } from "src/util/TerminalInputReader";

const inputReader: InputReader = new TerminalInputReader();
const conversionView: ConversionView = new ConversionView(inputReader);
const exchangeRateApiService: ExchangeRateApiService = new ExchangeRateApiService();
const conversionController: ConversionController = new ConversionController(exchangeRateApiService, conversionView);

conversionController.run();

