/**
 * @fileoverview Constants for grammar rules.
 */

/**
 * A list of articles.
 */
export const ARTICLES = ['a', 'an', 'the'] as const;

/**
 * A list of conjunctions.
 */
export const CONJUNCTIONS = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet'] as const;

/**
 * A list of prepositions.
 */
export const PREPOSITIONS = [
  'aboard',
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'amid',
  'among',
  'anti',
  'around',
  'as',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'besides',
  'between',
  'beyond',
  'but',
  'by',
  'concerning',
  'considering',
  'despite',
  'down',
  'during',
  'except',
  'excepting',
  'excluding',
  'following',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'minus',
  'near',
  'of',
  'off',
  'on',
  'onto',
  'opposite',
  'outside',
  'over',
  'past',
  'per',
  'plus',
  'regarding',
  'round',
  'save',
  'since',
  'than',
  'through',
  'to',
  'toward',
  'towards',
  'under',
  'underneath',
  'unlike',
  'until',
  'up',
  'upon',
  'versus',
  'via',
  'with',
  'within',
  'without'
] as const;

/**
 * A list of prepositions that are exceptions to the rule of not capitalizing prepositions in titles.
 */
export const PREPOSITION_EXCEPTIONS = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet'] as const;

/**
 * NY Times-style capitalization exceptions.
 */
export const NYT_CAPS = ['no', 'nor', 'not', 'off', 'out', 'so', 'up'] as const;

/**
 * Chicago Manual of Style capitalization exceptions.
 */
export const CHICAGO_CAPS = ['and', 'but', 'for', 'or', 'nor'] as const;

export const GREEK_ALPHABET = {
  UPPERCASE: ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω'],
  LOWERCASE: ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'ς', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω']
} as const;

export const TITLECASE = ["a", "an", "and", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "so", "the", "to", "with"] as const;