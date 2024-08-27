import { type NumericRange } from "./Utilities";

/**
 * Represents time units in milliseconds or seconds.
 * 
 * @example
 * type T = Time;
 * const time: T = '10s'; // Valid
 * const timeMs: T = '500ms'; // Valid
 */
export type TimeUnits = 'ms' | 's';

/**
 * Represents a time string with a number followed by a time unit ('ms' or 's').
 * 
 * @example
 * type T = Time;
 * const time: T = '10s'; // Valid
 * const timeMs: T = '500ms'; // Valid
 */
export type Time = `${number}${TimeUnits}`;

/**
 * Represents the days of the week.
 * 
 * @example
 * type T = Days;
 * const day: T = 'Monday'; // Valid
 */
export type Days = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

/**
 * Represents the months of the year.
 * 
 * @example
 * type T = Months;
 * const month: T = 'January'; // Valid
 */
export type Months = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

/**
 * Represents a value in milliseconds.
 * 
 * @example
 * type T = MillisecondsValue;
 * const ms: T = 1000; // Valid
 */
export type MillisecondsValue = number;

/**
 * Represents a value in seconds (0 to 59).
 * 
 * @example
 * type T = SecondsValue;
 * const sec: T = 30; // Valid
 */
export type SecondsValue = NumericRange<[], 59>;

/**
 * Represents a value in minutes (0 to 59).
 * 
 * @example
 * type T = MinutesValue;
 * const min: T = 45; // Valid
 */
export type MinutesValue = NumericRange<[], 59>;

/**
 * Represents a value in hours (0 to 23) for a 24-hour clock.
 * 
 * @example
 * type T = HoursValue;
 * const hr: T = 13; // Valid
 */
export type HoursValue = NumericRange<[], 23>;

/**
 * Represents a value in hours (1 to 12) for a 12-hour clock.
 * 
 * @example
 * type T = TwelveHoursValue;
 * const hr: T = 5; // Valid
 */
export type TwelveHoursValue = NumericRange<[1], 12>;

/**
 * Represents a value in days (1 to 31).
 * 
 * @example
 * type T = DaysValue;
 * const day: T = 15; // Valid
 */
export type DaysValue = NumericRange<[1], 31>;

/**
 * Represents a value in weeks (1 to 52).
 * 
 * @example
 * type T = WeeksValue;
 * const week: T = 12; // Valid
 */
export type WeeksValue = NumericRange<[1], 52>;

/**
 * Represents a value in months (1 to 12).
 * 
 * @example
 * type T = MonthValue;
 * const month: T = 7; // Valid
 */
export type MonthValue = NumericRange<[1], 12>;

/**
 * Represents a value in years.
 * 
 * @example
 * type T = YearValue;
 * const year: T = 2022; // Valid
 */
export type YearValue = number;

/**
 * Represents a clock time with hours, minutes, seconds, milliseconds, and a time period (AM or PM).
 * 
 * @example
 * type T = ClockTime;
 * const time: T = { hr: 14, min: 30, s: 45, ms: 500 }; // Valid
 */
export type ClockTime = {
  hr: HoursValue;
  min: MinutesValue;
  s: SecondsValue;
  ms: MillisecondsValue;
  period: TimePeriod;
}

/**
 * Represents a calendar time with days, weeks, months, and years.
 * 
 * @example
 * type T = CalendarTime;
 * const date: T = { d: 15, wk: 12, mo: 7, yr: 2022 }; // Valid
 */
export type CalendarTime = {
  d: DaysValue;
  wk: WeeksValue;
  mo: MonthValue;
  yr: YearValue;
}

/**
 * Represents a time period (AM or PM).
 * 
 * @example
 * type T = Period;
 * const period: T = 'AM'; // Valid
 */
export type TimePeriod = 'AM' | 'PM';