/**
 * CSS color name values.
 */
export interface ColorNameValues {
  rgb: [number, number, number],
  hsl: [number, number, number],
  lab: [number, number, number],
  lch: [number, number, number],
  cmyk: [number, number, number, number],
}

/**
 * CSS color name strings.
 */
export interface ColorNameStrings {
  hex: string,
  rgb: string,
  hsl: string,
  lab: string,
  lch: string,
  cmyk: string,
};

/**
 * CSS color name patterns.
 */
export type ColorNameHexPatterns = Record<string, RegExp>;

/**
 * CSS color name hex strings.
 */
export type ColorNameHexStrings = Record<string, string>;