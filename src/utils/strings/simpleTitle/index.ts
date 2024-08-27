import { capitalizeWords } from "../capitalizeWords";

/**
 * Capitalizes the first letter in each word of a string, except for words in the
 * `ignore` array.
 *
 * @param input - The string to convert to title case.
 * @param ignore - An optional array of words to not capitalize in the output.
 *
 * @returns The input string with the first letter of each word capitalized, except for ignored words.
 */
export const title = (input: string, ignore: string[] = []) => {
  return capitalizeWords(input, true, ignore);
};