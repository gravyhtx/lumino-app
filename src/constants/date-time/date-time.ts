import type { Days, Months } from "../../types/DateTime";

//* DATE TIME FORMAT
/**
 * Returns user's date time format.
 * 
 * @type {string}
 * 
 * @example
 * DT_FORMAT.locale; //=> 'en-US'
 * DT_FORMAT.calendar; //=> 'gregory'
 * DT_FORMAT.numberingSystem; //=> 'latn'
 * DT_FORMAT.timeZone; //=> 'America/Chicago'
 */
export const DT_FORMAT: Intl.ResolvedDateTimeFormatOptions = Intl.DateTimeFormat().resolvedOptions();

//* CURRENT DATE
/**
 * Returns the current date.
 * 
 * @type {Date}
 * 
 * @example
 * CURRENT_DATE; //=> '2024-10-24T14:30:00.000Z'
 */
export const CURRENT_DATE: Date =  new Date();

//* DAYS OF THE WEEK
/**
 * An array of day names.
 * 
 * @type {Array<Days>}
 */
export const DAY_NAMES: Days[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//* MONTH NAMES
/**
 * An array of month names.
 * 
 * @type {Array<Months>}
 */
export const MONTH_NAMES: Months[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//* CURRENT YEAR
/**
 * Gets the current year.
 */
export const CURRENT_YEAR: string = CURRENT_DATE.getFullYear().toString();

//* CURRENT MONTH VALUE
/**
 * Gets the current month's number value.
 */
export const CURRENT_MONTH_VALUE: number = CURRENT_DATE.getMonth() + 1;

//* CURRENT MONTH NAME
/**
 * Gets the current month's name.
 */
export const CURRENT_MONTH_NAME: string = MONTH_NAMES[CURRENT_DATE.getMonth()]!;

//* CURRENT DAY VALUE
/**
 * Gets the current day's number value.
 */
export const CURRENT_DAY_VALUE: number = CURRENT_DATE.getDate();

//* CURRENT DAY NAME
/**
 * Gets the current day's name.
 */
export const CURRENT_DAY_NAME: string = DAY_NAMES[CURRENT_DATE.getDay()]!;