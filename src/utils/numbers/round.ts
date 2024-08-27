/**
 * Rounds a number to the specified number of decimal places.
 * 
 * @param value - The number to round.
 * @param decimalPlaces - The number of decimal places to round to (default is 0).
 * @returns The rounded number.
 * 
 * @example
 * round(1.3455); // 1
 * round(1.3455, 1); // 1.3
 * round(1.3455, 2); // 1.35
 */
export const round = (value: number, decimalPlaces = 0): number => Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);