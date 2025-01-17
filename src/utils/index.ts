import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, supporting various input types.
 *
 * @param {...unknown[]} classes - Class names which can be strings, arrays, objects, or null/undefined.
 * @returns {string} A single string containing all provided class names, separated by spaces.
 * @example <caption>Basic usage with strings</caption>
 * console.log(classnames('foo', true && 'bar', 'baz')); // 'foo bar baz'
 * 
 * @example <caption>Using objects</caption>
 * console.log(classnames({ foo: true, bar: false, baz: true })); // 'foo baz'
 * 
 * @example <caption>Using objects with various structures</caption>
 * console.log(classnames({ foo: true }, { bar: false }, null, { '--foobar': 'hello' })); // 'foo --foobar'
 * 
 * @example <caption>Using arrays</caption>
 * console.log(classnames(['foo', 0, false, 'bar'])); // 'foo bar'
 * 
 * @example <caption>Using nested arrays</caption>
 * console.log(classnames(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])); // 'foo bar baz hello there'
 * 
 * @example <caption>Complex example with various input types</caption>
 * console.log(classnames('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya')); // 'foo bar hello world cya'
 */
export const classnames = (...classes: unknown[]): string => {
  const result: string[] = [];

  /**
   * Processes the input to determine its type and handle it accordingly.
   * @param {unknown} input - The input to process.
   */
  const process = (input: unknown): void => {
    // If the input is a string, add it to the result
    if (typeof input === 'string') {
      result.push(input);
    }

    // If the input is an array, recursively process each element
    if (Array.isArray(input)) {
      input.forEach(process);
    }

    // If the input is an object, add its keys to the result if their values are truthy
    if (input && typeof input === 'object') {
      Object.keys(input as Record<string, unknown>).forEach(key => {
        if ((input as Record<string, unknown>)[key]) {
          result.push(key);
        }
      });
    }
  };

  // Process each class name input
  for (const cls of classes) {
    process(cls);
  }

  // Merge the class names and return the result as a single string
  return twMerge(result.join(' '));
};

// Utility to open a screen and update the query params
export const openScreen = (screen: string, data: Record<string, string | number | undefined> = {}) => {
  const params = new URLSearchParams(window.location.search);

  // Set the screen and any additional data
  params.set("open", screen);
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  });

  // Update the URL without reloading the page
  window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
};

// Utility to close the currently open screen
export const closeScreen = () => {
  const params = new URLSearchParams(window.location.search);
  params.delete("open");

  // Remove associated query params
  for (const key of params.keys()) {
    if (key !== "open") {
      params.delete(key);
    }
  }

  window.history.pushState({}, "", `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`);
};


export * from './strings';
export * from './numbers';