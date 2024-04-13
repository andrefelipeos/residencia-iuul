import { ConversionController } from "./controller/ConversionController.js";
import { ConversionView } from "src/view/ConversionView";
import { ExchangeRateApiService } from "./service/ExchangeRateApiService.js";
import { InputReader } from "src/util/InputReader";
import { TerminalInputReader } from "src/util/TerminalInputReader";

const inputReader: InputReader = new TerminalInputReader();
const conversionView = new ConversionView(inputReader);
const exchangeRateApiService = new ExchangeRateApiService();
const conversionController = new ConversionController(conversionView);

conversionController.run();

