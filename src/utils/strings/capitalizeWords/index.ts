import { capitalize } from "../capitalize";
import { TITLECASE } from "@/constants/grammar";

/**
 * Capitalizes the first letter of each word in a string, with the option to ignore specific words.
 * @param input - The string to capitalize.
 * @param titleCase - A boolean indicating whether to capitalize all words, except for ignored words, or to only capitalize the first word.
 * @param ignoreWordsList - An optional array of strings indicating words to ignore when capitalizing.
 * @returns A new string with the specified words capitalized.
 */
export const capitalizeWords = (input: string, titleCase = false, ignoreWordsList: string[] = []): string => {
  const words = input.trim().split(" ");

  const findIgnoredVersion = (word: string) => {
    return ignoreWordsList.find(iw => iw.toLowerCase() === word.toLowerCase());
  };

  const isIgnored = (word: string): boolean => {
    return Boolean(ignoreWordsList.some(iw => iw.toLowerCase() === word.toLowerCase())) ?? Boolean(TITLECASE.includes(word.toLowerCase() as typeof TITLECASE[number]));
  };

  return words
    .map((word, index) => {
      if (word.match(/^\d+$/)) {
        return word;
      }

      if (index === 0) {
        const ignoredVersion = findIgnoredVersion(word);
        return ignoredVersion ?? capitalize(word);
      }

      const lowercaseWord = word.toLowerCase();
      if (titleCase && !isIgnored(lowercaseWord)) {
        return capitalize(lowercaseWord);
      }

      const ignoredVersion = findIgnoredVersion(word);
      return ignoredVersion ?? lowercaseWord;
    })
    .join(" ");
};