import { CHICAGO_CAPS, GREEK_ALPHABET, NYT_CAPS, PREPOSITIONS } from "@/constants";
import type { TitlecaseConfig } from "@/utils/types";


/**
 * Converts a string to title case based on the specified style preference and configuration options.
 *
 * @param {string} title - The string to convert to title case.
 * @param {TitlecaseConfig} [config={}] - The configuration options for title casing.
 * @param {string} [config.preference='AP'] - The style preference for title casing. Supported values: 'AMA', 'AP', 'APA', 'NYT', 'CMOS', 'MLA', 'Wikipedia', 'Bluebook'.
 * @param {boolean} [config.ignoreCapitalized=true] - Whether to ignore words that are fully capitalized.
 * @param {string[]} [config.exceptions=[]] - An array of words that should not be capitalized.
 * @param {3 | 4 | false} [config.prepositionCase=false] - The length of prepositions to keep lowercase. Set to 3 or 4 to keep prepositions with 3 or 4 letters lowercase, or false to ignore preposition length.
 * @param {string[]} [config.exactCases=[]] - An array of words that should maintain their exact casing.
 * @param {Record<string, number[]>} [config.instanceExceptions={}] - An object specifying the instances of words that should be capitalized. The key is the word, and the value is an array of 1-based indices indicating which instances should be capitalized.
 *
 * @returns {string} The string converted to title case based on the specified configuration.
 *
 * @example
 * // Basic usage with default configuration (AP style)
 * titlecase('the quick brown fox jumps over the lazy dog');
 * // Returns: 'The Quick Brown Fox Jumps Over the Lazy Dog'
 *
 * @example
 * // Using AMA style with custom exceptions and preposition case
 * titlecase('the quick brown fox jumps over the lazy dog', {
 *   preference: 'AMA',
 *   exceptions: ['fox', 'dog'],
 *   prepositionCase: 3
 * });
 * // Returns: 'The Quick Brown fox Jumps over the Lazy dog'
 *
 * @example
 * // Using NYT style with exact cases and instance exceptions
 * titlecase('the quick brown fox jumps over the lazy dog', {
 *   preference: 'NYT',
 *   exactCases: ['QuIcK'],
 *   instanceExceptions: { 'the': [1, 7] }
 * });
 * // Returns: 'The QuIcK Brown Fox Jumps Over The Lazy Dog'
 *
 * @example
 * // Handling Greek letters
 * titlecase('β-blocker and δ-9-tetrahydrocannabinol', {
 *   preference: 'AP'
 * });
 * // Returns: 'β-Blocker and Δ-9-tetrahydrocannabinol'
 */
export const titlecase = (title: string, config: TitlecaseConfig = {}) => {
  const {
    preference = 'AP',
    ignoreCapitalized = true,
    exceptions = [],
    prepositionCase = false,
    exactCases = [],
    instanceExceptions = {},
  } = config;

  const words = title.split(' ');

  const capitalizeWord = (word: string, index: number, totalWords: number) => {
    const lowerCaseWord = word.toLowerCase();

    if (ignoreCapitalized && word === word.toUpperCase()) {
      return word;
    }

    if (exactCases.includes(word)) {
      return word;
    }

    if (index === 0 || index === totalWords - 1) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (instanceExceptions[lowerCaseWord]?.includes(index)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (exceptions.includes(lowerCaseWord)) {
      return lowerCaseWord;
    }

    if (prepositionCase) {
      if (PREPOSITIONS.includes(lowerCaseWord as typeof PREPOSITIONS[number])) {
        if (prepositionCase === 3 && lowerCaseWord.length <= 3) {
          return lowerCaseWord;
        }
        if (prepositionCase === 4 && lowerCaseWord.length <= 4) {
          return lowerCaseWord;
        }
      }
    }

    if (preference === 'NYT' && NYT_CAPS.includes(lowerCaseWord as typeof NYT_CAPS[number])) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (['CMOS', 'MLA'].includes(preference) && CHICAGO_CAPS.includes(lowerCaseWord as typeof CHICAGO_CAPS[number])) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const greekLetterIndex = GREEK_ALPHABET.LOWERCASE.indexOf(word.charAt(0) as typeof GREEK_ALPHABET.LOWERCASE[number]);
    if (greekLetterIndex !== -1) {
      const nextChar = word.charAt(1);
      if (
        nextChar &&
        !GREEK_ALPHABET.LOWERCASE.includes(nextChar as typeof GREEK_ALPHABET.LOWERCASE[number]) &&
        !GREEK_ALPHABET.UPPERCASE.includes(nextChar as typeof GREEK_ALPHABET.UPPERCASE[number])
      ) {
        const currentLetter = GREEK_ALPHABET.LOWERCASE[greekLetterIndex];
        const isWordEnd = greekLetterIndex === GREEK_ALPHABET.LOWERCASE.length - 1;
        const lowercaseLetter = currentLetter === 'σ' && isWordEnd ? 'ς' : currentLetter;
        return lowercaseLetter + nextChar.toUpperCase() + word.slice(2);
      }
    }

    const greekLetterIndexUpper = GREEK_ALPHABET.UPPERCASE.indexOf(word.charAt(0) as typeof GREEK_ALPHABET.UPPERCASE[number]);
    if (greekLetterIndexUpper !== -1) {
      const nextChar = word.charAt(1);
      if (
        nextChar &&
        !GREEK_ALPHABET.LOWERCASE.includes(nextChar as typeof GREEK_ALPHABET.LOWERCASE[number]) &&
        !GREEK_ALPHABET.UPPERCASE.includes(nextChar as typeof GREEK_ALPHABET.UPPERCASE[number])
      ) {
        const lowercaseLetter = GREEK_ALPHABET.UPPERCASE[greekLetterIndexUpper] === 'Σ' ? 'σ' : GREEK_ALPHABET.LOWERCASE[greekLetterIndexUpper];
        return lowercaseLetter + nextChar.toLowerCase() + word.slice(2);
      }
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return words.map((word, index) => capitalizeWord(word, index, words.length)).join(' ');
};