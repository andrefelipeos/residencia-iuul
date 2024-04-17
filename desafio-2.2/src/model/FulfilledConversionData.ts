import { ConversionData } from "./ConversionData";

export interface FulfilledConversionData extends ConversionData {
  conversionRate: number;
  conversionResult: number;
}

