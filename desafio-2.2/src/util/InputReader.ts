export interface InputReader {
  closeResources(): void;
  getNumber(message?: string): Promise<number>;
  getString(message?: string): Promise<string>;
}

