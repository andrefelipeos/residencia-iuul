export interface InputReader {
  getNumber(message?: string): Promise<number>;
  getString(message?: string): Promise<string>;
}

