import type { Concat } from "./Utilities";

/** Lowercase letters [a-z] */
export type LowercaseLetter =
|'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z';

/** Uppercase letters [A-Z] */
export type UppercaseLetter = Uppercase<LowercaseLetter>;
// |'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

/** All letters (LowercaseLetter | UppercaseLetter) */
export type Letter = LowercaseLetter | UppercaseLetter;

/** Digit string ['0'-'9'] */
export type DigitString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/** Digit number [0-9] */
export type DigitNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** All digits (DigitNumber | DigitString) */
export type Digit = DigitNumber | DigitString;

/** All characters (Letters | Numbers) */
export type Character = Letter | Digit;

/** Whitespace characters */
export type Whitespace = ' ' | '\t' | '\n' | '\r';

/** Hexadecimal characters */
export type HexadecimalCharacter = Digit | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

/** Alphanumeric string (concatenation of Letter and Digit) */
export type AlphanumericString = `${Letter}${Concat<string, Digit>}`;

/** String with punctuation (concatenation of AlphanumericString and Punctuation) */
export type StringWithPunctuation = `${AlphanumericString}${Punctuation}`;

/** String with whitespace (concatenation of StringWithPunctuation and Whitespace) */
export type StringWithWhitespace = `${StringWithPunctuation}${Whitespace}`;

/** Punctuation characters */
export type Punctuation =
  | '!'
  | '"'
  | '#'
  | '$'
  | '%'
  | '&'
  | "'"
  | '('
  | ')'
  | '*'
  | '+'
  | ','
  | '-'
  | '.'
  | '/'
  | ':'
  | ';'
  | '<'
  | '='
  | '>'
  | '?'
  | '@'
  | '['
  | '\\'
  | ']'
  | '^'
  | '_'
  | '`'
  | '{'
  | '|'
  | '}'
  | '~';

/** Symbols */
export type Symbols =
  | '¡'
  | '¢'
  | '£'
  | '¤'
  | '¥'
  | '¦'
  | '§'
  | '¨'
  | '©'
  | 'ª'
  | '«'
  | '¬'
  | '®'
  | '¯'
  | '°'
  | '±'
  | '²'
  | '³'
  | '´'
  | 'µ'
  | '¶'
  | '·'
  | '¸'
  | '¹'
  | 'º'
  | '»'
  | '¼'
  | '½'
  | '¾'
  | '¿'
  | '×'
  | '÷'
  | '∞'
  | '≈'
  | '≠'
  | '≤'
  | '≥';

/** Special characters (Punctuation | Symbols) */
export type SpecialCharacters = Punctuation | Symbols;

/** All possible characters for strong passwords */
export type PasswordCharacter = Punctuation | Letter | DigitString;