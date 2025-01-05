/**
 * Add leading zeros to a number.
 * @param {number} value The number to add leading zeros to.
 * @param {number} [places=2] The number of places to pad the number to.
 * @returns {string} The number with leading zeros.
 * 
 * @example
 * leadingZeros(9); //=> '09'
 * leadingZeros(10); //=> '10'
 * leadingZeros(7, 3); //=> '007'
 */
export const leadingZeros = (value: number, places = 2): string => {
  return value.toString().padStart(places, "0");
};