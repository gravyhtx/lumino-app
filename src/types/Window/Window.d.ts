export type WindowCrypto = "crypto" | "msCrypto";

export interface WindowMSCrypto extends Window {
  msCrypto?: {
    getRandomValues: (arr: Uint32Array) => void;
  };
}