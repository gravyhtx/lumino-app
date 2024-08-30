/**
 * Color matrix for image filters
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
 * @readonly
 */
export const COLOR_MATRIX = {
  COOL: {
    CRISP:   `1.000  0.000  0.000  0.020  0.000
              0.000  1.000  0.000  0.000  0.000
              0.100  0.200  1.000  0.000  0.000
              0.000  0.500  0.000  1.000  0.000`
  },
  WARM: {
    WASHED:  `1.800  0.000  0.100  0.000  0.000
              0.000  1.200  0.000  0.100  0.000
              0.100  0.000  1.200  0.000  0.100
              0.000  0.100  0.000  1.800  0.000`
  }
} as const;