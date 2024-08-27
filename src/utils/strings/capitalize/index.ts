/**
 * Capitalizes the first letter of a string, or all words if specified.
 *
 * @param {string} string - The string to capitalize.
 * @param {boolean} [firstLetterOnly] - If `true`, only the first letter of the string will be capitalized.
 * If `false` or omitted, all other letters will keep their original casing.
 * @returns {string} The capitalized string.
 */
export const capitalize = (string: string, firstLetterOnly?: boolean): string => {
  //? If 'firstLetterOnly' is true, all other characters are lowercase
  if(firstLetterOnly) {
    string = string.toLowerCase();
  }
  //? If 'firstLetterOnly' is not true then other characters will keep their casing
  return string.charAt(0).toUpperCase() + string.slice(1);
}