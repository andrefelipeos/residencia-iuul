import { ConversionData } from "src/model/ConversionData";

export interface FulfilledConversionData extends ConversionData {
  conversionRate: number;
  conversionResult: number;
}

