import { ConversionData } from "src/model/ConversionData";

export interface FulfilledConversionData extends ConversionData {
  exchangeRate: number;
  exchangeResult: number;
}

